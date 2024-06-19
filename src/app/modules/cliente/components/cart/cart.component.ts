import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { Store } from '../../models/store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  imgPath = '../../../../../assets/imgs/icon-image-not-found-free-vector.jpg';

  store: Store = {
    id : 1,
    name: 'Loja 1',
    description: 'Descrição da loja 1',
    pathImage: this.imgPath,
    deliveryFee: 10,
    rating: 4,
  };

  products: Product[] = [
    {
      id: '1',
      name: 'Produto 1',
      price: 100,
      image: this.imgPath,
      rating: 4,
      category: 'Categoria 1',
      description: 'Descrição 1',
      quantity: 1
    },
    {
      id: '2',
      name: 'Produto 2',
      price: 200,
      image: this.imgPath,
      rating: 5,
      category: 'Categoria 1',
      description: 'Bem-vindo ao mundo dos sanduíches Subway, onde a criatividade culinária encontra a conveniência! Nossa categoria de sanduíches oferece uma variedade de opções para todos os gostos, desde clássicos até criações personalizadas. Escolha o seu tipo de pão, proteína, vegetais, queijos e molhos para montar o sanduíche perfeito. Com ingredientes frescos e saborosos, os nossos sanduíches são uma escolha deliciosa e satisfatória para qualquer ocasião.',
      quantity: 2
    },
    {
      id: '3',
      name: 'Produto 3',
      price: 300,
      image: this.imgPath,
      rating: 0,
      category: 'Categoria 2',
      description: 'Bem-vindo ao mundo dos sanduíches Subway, onde a criatividade culinária encontra a conveniência! Nossa categoria de sanduíches oferece uma variedade de opções para todos os gostos, desde clássicos até criações personalizadas. Escolha o seu tipo de pão, proteína, vegetais, queijos e molhos para montar o sanduíche perfeito. Com ingredientes frescos e saborosos, os nossos sanduíches são uma escolha deliciosa e satisfatória para qualquer ocasião.',
      quantity: 4
    }
  ];
  
  constructor() { }

  minusQtde(product: Product) {
    if (product.quantity && product.quantity > 0) {
      product.quantity--;
    }
  }

  plusQtde(product: Product) {
    if (product.quantity) {
      product.quantity++;
    }
  }

  removeItem(product: Product) {
    this.products = this.products.filter(p => p.id !== product.id);
  }

  precoTotal() {
    if (!this.products) {
      return 0;
    }
    
    return this.products.reduce((acc, product) => acc + product.price * (product.quantity ?? 0), 0) + this.store.deliveryFee;
  }

  detalharProduto(product: Product) {
    alert(`Detalhes do produto: ${product.name}`);
  }
}
