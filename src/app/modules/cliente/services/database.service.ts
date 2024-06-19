import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  endpoint = "http://localhost:8000/api";

  constructor(private http: HttpClient) {}

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
    return this.http.get<any>(`${this.endpoint}/empreendimentos/${id}/`).pipe(
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

  getAvaliability(id: number): Observable<any> {
    return this.http.get<any>(`${this.endpoint}/disponibilidade/${id}/`).pipe(
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
}
