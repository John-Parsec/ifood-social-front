import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SacolaService {
  //produtos: Product[] = [];
  //observacoes: string[] = [];

  private _produtos: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);
  private _observacoes: BehaviorSubject<string[]> = new BehaviorSubject<
    string[]
  >([]);

  get produtos(): BehaviorSubject<any[]> {
    return this._produtos;
  }

  get observacoes(): BehaviorSubject<string[]> {
    return this._observacoes;
  }

  constructor() {}

  // Método para atualizar produtos
  atualizarProdutos(novosProdutos: any[]) {
    this._produtos.next(novosProdutos);
  }

  // Método para atualizar observações
  atualizarObservacoes(novasObservacoes: string[]) {
    this._observacoes.next(novasObservacoes);
  }

  adicionar(produto: Product, observacao: string) {
    let produtosAtt = this.produtos.value; // Obtém o produtos atuais
    let observacoesAtt = this.observacoes.value; // Obtém as observações atuais

    // Verifica se o produto já está na sacola e atualiza a quantidade
    if (produtosAtt.some((p) => p.id === produto.id)) {
      produtosAtt = this.plusQtde(produto, produtosAtt);
      return;
    } else {
      // add produto e observacao
      produto.quantity = 1;
      produtosAtt.push(produto);
      this.atualizarProdutos(produtosAtt);
      observacoesAtt.push(observacao);
      this.atualizarObservacoes(observacoesAtt);
    }
  }

  remover(produto: Product) {
    let produtosAtt = this.produtos.value;
    let observacoesAtt = this.observacoes.value;

    // remove produto e observacao
    let index = produtosAtt.findIndex((p) => p.id === produto.id);
    produtosAtt.splice(index, 1);
    this.atualizarProdutos(produtosAtt);
    observacoesAtt.splice(index, 1);
    this.atualizarObservacoes(observacoesAtt);
  }

  minusQtde(product: Product, productList?: Product[]): Product[] {
    if (!productList) {
      productList = this.produtos.value;
    }
    productList.forEach((p) => {
      if (p.id === product.id) {
        p.quantity && p.quantity > 1 ? p.quantity-- : (p.quantity = 1);
      }
    });
    return productList;
  }

  plusQtde(product: Product, productList?: Product[]): Product[] {
    if (!productList) {
      productList = this.produtos.value;
    }
    productList.forEach((p) => {
      if (p.id === product.id) {
        p.quantity ? p.quantity++ : (p.quantity = 1);
      }
    });
    return productList;
  }
}
