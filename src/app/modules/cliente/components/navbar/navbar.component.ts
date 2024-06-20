import { Component, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Tag } from "primeng/tag";
import { DatabaseService } from "../../services/database.service";
import { User } from "../../models/user";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent {
  search: string = "";
  showCart: boolean = false;

  constructor(private router: Router, private databaseService: DatabaseService) {}

  toReceits() {
    this.router.navigate(["/receits"]);
  }

  toProfile() {
    this.router.navigate(["/profile"]);
  }

  toHome() {
    this.search = "";
    this.router.navigate(["/home"]);
  }

  onSearch() {
    this.router.navigate(["/search", this.search]);
  }

  toggleCart() {
    this.showCart = !this.showCart;
  }
}
