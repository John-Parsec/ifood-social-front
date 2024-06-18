import { HomeStoreInterface } from "./../../models/home-store-interface";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DatabaseService } from "../../services/database.service";
import { Observable } from "rxjs";
interface HighlightStoreCollection {
  title: string;
  stores: HomeStoreInterface[];
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
  responsiveOptions: any[] | undefined;
  categoriesDefinition: any[] = [];
  highlightStores: HighlightStoreCollection[] = [];
  stores$: Observable<any[]> = new Observable();

  constructor(
    private router: Router,
    private databaseService: DatabaseService
  ) {
    this.categoriesDefinition = [
      {
        name: "Perto de você",
        pathImage: "assets/imgs/logo_padrao_loja.png",
        rating: 4.5,
        count: 5,
      },
      {
        name: "Lojas em destaque",
        pathImage: "assets/imgs/logo_padrao_loja.png",
        rating: 5,
        count: 10,
      },
      {
        name: "Comidas salgadas",
        pathImage: "assets/imgs/logo_padrao_loja.png",
        rating: 4,
        count: 6,
      },
    ];
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

    this.loadStores();
  }

  loadStores() {
    this.categoriesDefinition.forEach((category) => {
      this.databaseService.getStores(category.count).subscribe(
        (stores) => {
          let storeList: HomeStoreInterface[] = [];
          stores.forEach((store: any) => {
            storeList.push({
              id: store.cod_empreedimento,
              name: store.dcr_nome_fantasia,
              pathImage: category.pathImage,
              rating: category.rating,
              distance: 1,
              oppenned: true,
            });
          });
          this.highlightStores?.push({
            title: category.name,
            stores: storeList,
          });
        },
        (error) => {
          console.error("Error fetching stores:", error);
          this.highlightStores = this.highlightStores;
        }
      );
    });
  }

  redirectToStore(id: number) {
    this.router.navigate(["/catalogo", id]);
  }
}
