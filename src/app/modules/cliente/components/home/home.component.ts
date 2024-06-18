import { Component, OnInit } from "@angular/core";
import { Store } from "../../models/store";
import { Router } from "@angular/router";
import { DatabaseService } from "../../services/database.service";
interface HighlightStoreCollection {
  title: string;
  stores: Store[];
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
  responsiveOptions: any[] | undefined;
  highlightStores: HighlightStoreCollection[] | undefined;

  constructor(
    private router: Router,
    private databaseService: DatabaseService
  ) {
    this.databaseService.getStores().subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: "1199px",
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: "991px",
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: "767px",
        numVisible: 1,
        numScroll: 1,
      },
    ];

    this.highlightStores = [
      {
        title: "Lojas em destaque",
        stores: [
          {
            id: 1,
            name: "Loja 1",
            description: "Descrição da loja 1",
            pathImage: "assets/imgs/logo_padrao_loja.png",
            rating: 4.5,
            deliveryFee: 0,
          },
          {
            id: 2,
            name: "Loja 2",
            description: "Descrição da loja 2",
            pathImage: "assets/imgs/logo_padrao_loja.png",
            rating: 3.5,
            deliveryFee: 0,
          },
          {
            id: 3,
            name: "Loja 3",
            description: "Descrição da loja 3",
            pathImage: "assets/imgs/logo_padrao_loja.png",
            rating: 5,
            deliveryFee: 0,
          },
        ],
      },
      {
        title: "Perto de voce",
        stores: [
          {
            id: 4,
            name: "Loja 4",
            description: "Descrição da loja 4",
            pathImage: "assets/imgs/logo_padrao_loja.png",
            rating: 4,
            deliveryFee: 0,
          },
          {
            id: 5,
            name: "Loja 5",
            description: "Descrição da loja 5",
            pathImage: "assets/imgs/logo_padrao_loja.png",
            rating: 3,
            deliveryFee: 0,
          },
          {
            id: 6,
            name: "Loja 6",
            description: "Descrição da loja 6",
            pathImage: "assets/imgs/logo_padrao_loja.png",
            rating: 4.5,
            deliveryFee: 0,
          },
        ],
      },
      {
        title: "Comida salgada",
        stores: [
          {
            id: 7,
            name: "Loja 7",
            description: "Descrição da loja 7",
            pathImage: "assets/imgs/logo_padrao_loja.png",
            rating: 4.5,
            deliveryFee: 0,
          },
          {
            id: 8,
            name: "Loja 8",
            description: "Descrição da loja 8",
            pathImage: "assets/imgs/logo_padrao_loja.png",
            rating: 3.5,
            deliveryFee: 0,
          },
          {
            id: 9,
            name: "Loja 9",
            description: "Descrição da loja 9",
            pathImage: "assets/imgs/logo_padrao_loja.png",
            rating: 5,
            deliveryFee: 0,
          },
        ],
      },
    ];
  }

  redirectToStore(id: number) {
    this.router.navigate(["/catalogo", id]);
  }
}
