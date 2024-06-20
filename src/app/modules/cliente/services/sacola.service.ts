import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SacolaService {

  produtos: Product[] = [];
  observacoes: string[] = [];

  constructor() { }

  adicionarProduto(produto: Product, observacao: string) {
    if (this.produtos.some(p => p.id === produto.id)) {
      this.produtos.map(p => {
        if (p.id === produto.id) {
          p.quantity? p.quantity++ : p.quantity = 1;
        }
      });
      return;
    }

    produto.quantity = 1;
    this.produtos.push(produto);
    this.observacoes.push(observacao);
  }

  minusQtde(product: Product) {
    this.produtos.map(p => {
      if (p.id === product.id && p.quantity && p.quantity > 0) {
        p.quantity--;
      }
    });
  }

  plusQtde(product: Product) {
    this.produtos.map(p => {
      if (p.id === product.id && p.quantity) {
        p.quantity++;
      }
    });
  }
}
