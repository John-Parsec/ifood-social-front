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
    this.produtos.push(produto);
    this.observacoes.push(observacao);
  }
}
