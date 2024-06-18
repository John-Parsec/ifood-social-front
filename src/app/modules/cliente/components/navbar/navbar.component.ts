import { Component, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Tag } from "primeng/tag";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent {
  search: string = "";
  showCart: boolean = false;

  constructor(private router: Router, private cartService: CartService) {}

  toReceits() {
    this.router.navigate(["/receits"]);
  }

  toProfile() {
    this.router.navigate(["/profile"]);
  }

  toHome() {
    this.router.navigate(["/home"]);
  }

  onSearch() {
    this.router.navigate(["/search", this.search]);
  }

  toggleCart() {
    this.showCart = !this.showCart;
    this.cartService.toggleCart(this.showCart);
  }
}
