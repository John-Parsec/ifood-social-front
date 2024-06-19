import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Store } from '../../models/store';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  imgPath = '../../../../../assets/imgs/icon-image-not-found-free-vector.jpg';
  
  @Input() store: Store | undefined;
  @Input() product: Product | undefined;
  @Input() visible = false;
  observacoes: string = '';

  constructor() { 
  }

  ngOnInit() {
  }

}
