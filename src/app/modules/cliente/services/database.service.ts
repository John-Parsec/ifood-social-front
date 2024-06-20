import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, concatMap, map, Observable, of, timeout } from "rxjs";
import { User } from "../models/user";
import { SacolaService } from "./sacola.service";

@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  endpoint = "http://localhost:8000/api";
  userAtual: User = {} as User;

  constructor(private http: HttpClient, private sacola: SacolaService) {}

  getClients(): Observable<any> {
    return this.http.get<User[]>(`${this.endpoint}/clientes/`).pipe(
      catchError((error) => {
        console.error("Error fetching clients:", error);
        return of([]);
      })
    );
  }

  getStores(number?: number): Observable<any> {
    return this.http.get<any>(`${this.endpoint}/empreendimentos/`).pipe(
      map((stores) => {
        // se nao for passado numero de lojas, retornar todas
        if (!number) {
          return stores;
        }

        const storeCount = stores.length;

        // para numero de lojas maior que o solicitado
        if (storeCount >= number) {
          return stores.slice(0, number);
        }

        // Se o número de lojas disponível for menor que o solicitado, repetir as lojas
        let result: any = [];
        while (result.length < number) {
          result = result.concat(stores);
        }
        return result.slice(0, number);
      }),
      catchError((error) => {
        console.error("Error fetching stores:", error);
        return of([]);
      })
    );
  }

  getStoreById(id: number): Observable<any> {
    return this.http.get<any>(`${this.endpoint}/empreendimento/${id}/`).pipe(
      catchError((error) => {
        console.error("Error fetching store:", error);
        return of({});
      })
    );
  }

  getStoreByName(name: string): Observable<any> {
    return this.http
      .get<any>(`${this.endpoint}/empreendimentos/?query_name=${name}`)
      .pipe(
        catchError((error) => {
          console.error("Error fetching store:", error);
          return of({});
        })
      );
  }

  getAvaliability(idStore: number): Observable<any> {
    return this.http
      .get<any>(`${this.endpoint}/empreendimento/${idStore}/disponibilidades/`)
      .pipe(
        catchError((error) => {
          console.error("Error fetching avaliability:", error);
          return of({});
        })
      );
  }

  getProductsByName(name: string): Observable<any> {
    return this.http
      .get<any>(`${this.endpoint}/produtos/?query_name=${name}`)
      .pipe(
        catchError((error) => {
          console.error("Error fetching products:", error);
          return of([]);
        })
      );
  }

  getCategoriesByStore(id: number): Observable<any> {
    return this.http
      .get<any>(`${this.endpoint}/empreendimento/${id}/categorias/`)
      .pipe(
        catchError((error) => {
          console.error("Error fetching categories:", error);
          return of([]);
        })
      );
  }

  postPedido(valorTotal: number): void {
    // codigo randomico de 6 numeros
    let randomCodPedido = Math.floor(100000 + Math.random() * 900000);
    let pedido = {
      cod_pedido: randomCodPedido,
      tip_pedido: "P",
      data_pedido: new Date(),
      vlr_pedido: valorTotal,
      cod_cliente: this.userAtual.id,
      cod_forma_pagto: 1,
      dcr_dados_pagto: "Dinheiro",
    };

    this.http
      .post(`${this.endpoint}/pedidos/`, pedido)
      .pipe(
        concatMap(() => {
          let produtos = this.sacola.produtos.value;
          return of(...produtos).pipe(
            concatMap((produto) => {
              let itemPedido = {
                cod_item_pedido: Math.floor(100 + Math.random() * 900),
                vlr_produto: produto.price,
                qtd_produto: produto.quantity,
                vlr_total: produto.price * produto.quantity,
                cod_pedido: randomCodPedido,
                cod_produto: produto.id,
              };
              return this.http.post(
                `${this.endpoint}/itens_pedido/`,
                itemPedido
              );
            })
          );
        })
      )
      .subscribe();
  }
}
