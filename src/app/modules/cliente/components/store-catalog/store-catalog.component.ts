import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-store-catalog',
  templateUrl: './store-catalog.component.html',
  styleUrl: './store-catalog.component.css'
})
export class StoreCatalogComponent {

  id: string;
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
      description: 'Descrição 2'
    },
    {
      id: '3',
      name: 'Produto 3',
      price: 300,
      image: '',
      rating: 0,
      category: 'Categoria 2',
      description: 'Descrição 4'
    }
  ];

  productsFiltered: Product[] = this.products;

  categorias = [
    { id: '0', name: 'Tudo'},
    { id: '1', name: 'Categoria 1' },
    { id: '2', name: 'Categoria 2' },
    { id: '3', name: 'Categoria 3' }
  ];

  idCategoriaSelecionada = '0';

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
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
}
