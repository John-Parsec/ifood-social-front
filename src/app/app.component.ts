import { Component, Input } from '@angular/core';
import { CartService } from './modules/cliente/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IFoodSocial';

  showCart: boolean = false;

  constructor(private cartService: CartService) {
    this.cartService.showCart$.subscribe(showCart => {
      this.showCart = showCart;
    });
  }
}