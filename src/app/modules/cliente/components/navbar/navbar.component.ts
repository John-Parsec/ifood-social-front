import { Component } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent {
  search: string = "";
  toReceits() {
    console.log("toReceits");
  }

  toProfile() {
    console.log("toProfile");
  }

  onSearch() {
    console.log("toSearch /", this.search);
  }
}
