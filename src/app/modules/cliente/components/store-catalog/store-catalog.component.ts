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
      name: 'Product 1',
      price: 100,
      image: '',
      rating: 4
    },
    {
      id: '2',
      name: 'Product 2',
      price: 200,
      image: '',
      rating: 5
    },
    {
      id: '3',
      name: 'Product 3',
      price: 300,
      image: '',
      rating: 0
    }
  ];

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }
}
