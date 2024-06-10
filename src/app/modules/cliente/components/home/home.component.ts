import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  weekTop = [
    {
      id: 1,
      pathImage: "assets/imgs/logo_padrao_loja.png",
      name: "Store 1",
      rating: 4.5,
      description: "Store 1 description",
    },
    {
      id: 2,
      pathImage: "assets/imgs/logo_padrao_loja.png",
      name: "Store 2",
      rating: 4.0,
      description: "Store 2 description",
    },
    {
      id: 3,
      pathImage: "assets/imgs/logo_padrao_loja.png",
      name: "Store 3",
      rating: 3.5,
      description: "Store 3 description",
    },
    {
      id: 4,
      pathImage: "assets/imgs/logo_padrao_loja.png",
      name: "Store 4",
      rating: 3.0,
      description: "Store 4 description",
    },
  ];
}
