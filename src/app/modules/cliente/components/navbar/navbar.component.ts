import { Component, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Tag } from "primeng/tag";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent {
  search: string = "";

  @Output() _showCart: boolean = false;

  constructor(private router: Router) {}

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

  showCart() {
    this._showCart = true;
  }
}
