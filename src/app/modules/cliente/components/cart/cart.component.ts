import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  products: Product[] = [
    {
      id: '1',
      name: 'Produto 1',
      price: 100,
      image: '',
      rating: 4,
      category: 'Categoria 1',
      description: 'Descrição 1'
    },
    {
      id: '2',
      name: 'Produto 2',
      price: 200,
      image: '',
      rating: 5,
      category: 'Categoria 1',
      description: 'Bem-vindo ao mundo dos sanduíches Subway, onde a criatividade culinária encontra a conveniência! Nossa categoria de sanduíches oferece uma variedade de opções para todos os gostos, desde clássicos até criações personalizadas. Escolha o seu tipo de pão, proteína, vegetais, queijos e molhos para montar o sanduíche perfeito. Com ingredientes frescos e saborosos, os nossos sanduíches são uma escolha deliciosa e satisfatória para qualquer ocasião.'
    },
    {
      id: '3',
      name: 'Produto 3',
      price: 300,
      image: '',
      rating: 0,
      category: 'Categoria 2',
      description: 'Bem-vindo ao mundo dos sanduíches Subway, onde a criatividade culinária encontra a conveniência! Nossa categoria de sanduíches oferece uma variedade de opções para todos os gostos, desde clássicos até criações personalizadas. Escolha o seu tipo de pão, proteína, vegetais, queijos e molhos para montar o sanduíche perfeito. Com ingredientes frescos e saborosos, os nossos sanduíches são uma escolha deliciosa e satisfatória para qualquer ocasião.'
    }
  ];
  
  constructor() { }
}
