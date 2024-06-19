import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { Store } from '../../models/store';
import { query } from '@angular/animations';

@Component({
  selector: 'app-store-catalog',
  templateUrl: './store-catalog.component.html',
  styleUrl: './store-catalog.component.css'
})
export class StoreCatalogComponent {

  imgPath = '../../../../../assets/imgs/icon-image-not-found-free-vector.jpg';

  id: number;
  store: Store = {
    id: 1,
    name: 'Loja 1',
    description: 'Descrição da loja 1',
    rating: 4.5,
    pathImage: this.imgPath,
    deliveryFee: 0
  };
  
  products: Product[] = [
    {
      id: '1',
      name: 'Produto 1',
      price: 100,
      image: this.imgPath,
      rating: 4,
      category: 'Categoria 1',
      description: 'Descrição 1'
    },
    {
      id: '2',
      name: 'Produto 2',
      price: 200,
      image: this.imgPath,
      rating: 5,
      category: 'Categoria 1',
      description: 'Bem-vindo ao mundo dos sanduíches Subway, onde a criatividade culinária encontra a conveniência! Nossa categoria de sanduíches oferece uma variedade de opções para todos os gostos, desde clássicos até criações personalizadas. Escolha o seu tipo de pão, proteína, vegetais, queijos e molhos para montar o sanduíche perfeito. Com ingredientes frescos e saborosos, os nossos sanduíches são uma escolha deliciosa e satisfatória para qualquer ocasião.'
    },
    {
      id: '3',
      name: 'Produto 3',
      price: 300,
      image: this.imgPath,
      rating: 0,
      category: 'Categoria 2',
      description: 'Bem-vindo ao mundo dos sanduíches Subway, onde a criatividade culinária encontra a conveniência! Nossa categoria de sanduíches oferece uma variedade de opções para todos os gostos, desde clássicos até criações personalizadas. Escolha o seu tipo de pão, proteína, vegetais, queijos e molhos para montar o sanduíche perfeito. Com ingredientes frescos e saborosos, os nossos sanduíches são uma escolha deliciosa e satisfatória para qualquer ocasião.'
    }
  ];

  productsFiltered: Product[] = this.products;
  layout: "list" | "grid" = "grid";

  categorias = [
    { id: '0', name: 'Tudo'},
    { id: '1', name: 'Categoria 1' },
    { id: '2', name: 'Categoria 2' },
    { id: '3', name: 'Categoria 3' }
  ];

  idCategoriaSelecionada = '0';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.params['id'];
    this.store = {
      id: this.id,
      name: 'Loja 1',
      description: 'Descrição da loja 1',
      rating: 4.5,
      pathImage: this.imgPath,
      deliveryFee: 0
    }
  }

  filtrarCategoria(categoria: string) {
    if (categoria === 'Tudo') {
      this.productsFiltered = this.products;
      return;
    }

    this.productsFiltered = this.products.filter(product => product.category === categoria);
  }

  onCategoriaChange(event: any) {
    this.idCategoriaSelecionada = event.value;

    const categoria = this.categorias.find(categoria => categoria.id === this.idCategoriaSelecionada);

    if (categoria){
      this.filtrarCategoria(categoria.name);
    }
  }

  get productsByCategory() {
    const groupedProducts: { [category: string]: Product[] } = {};
    
    for (const product of this.productsFiltered) {
      if (!groupedProducts[product.category]) {
        groupedProducts[product.category] = [];
      }
      groupedProducts[product.category].push(product);
    }

    return groupedProducts;
  }

  detalharProduto(id: number) {
    this.router.navigate(['produto', id], {relativeTo: this.route});
  }
}
