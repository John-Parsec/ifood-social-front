import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Store } from '../../models/store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  imgPath = '../../../../../assets/imgs/icon-image-not-found-free-vector.jpg';
  
  store: Store = {
    id : 1,
    name: 'Loja 1',
    description: 'Descrição da loja 1',
    pathImage: this.imgPath,
    deliveryFee: 10,
    rating: 4,
  };

  product: Product = {
    id: '1',
    name: 'Produto 1',
    price: 100,
    image: this.imgPath,
    rating: 4,
    category: 'Categoria 1',
    description: 'Descrição 1',
    quantity: 1
  };

  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    const catalogId = this.route.parent?.snapshot.paramMap.get('catalogId');
    const productId = this.route.snapshot.paramMap.get('productId');

    console.log(catalogId);
    console.log(productId);
  }

}
