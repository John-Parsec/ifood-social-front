import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private showCartSubject = new BehaviorSubject<boolean>(false);
  showCart$ = this.showCartSubject.asObservable();
  
  constructor() { }

  toggleCart(value: boolean) {
    this.showCartSubject.next(value);
  }
}
