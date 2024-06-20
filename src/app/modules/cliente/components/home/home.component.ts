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
            const pushStore = {
              id: store.cod_empreedimento,
              name: store.dcr_nome_fantasia,
              pathImage: category.pathImage,
              rating: category.rating,
              distance: 1,
              oppenned: false,
            };

            this.databaseService
              .getAvaliability(store.cod_empreedimento)
              .subscribe((data) => {
                let dateNow = new Date();
                let dayWeek = dateNow.getDay();
                let hourNow = dateNow.getHours();
                let minuteNow = dateNow.getMinutes();
                data.forEach((diponibilidade: any) => {
                  if (diponibilidade.num_dia_semana == dayWeek) {
                    let start = new Date(diponibilidade.hora_inicio);
                    let end = new Date(diponibilidade.hora_fim);
                    let startHour = start.getUTCHours();
                    let startMinute = start.getUTCMinutes();
                    let endHour = end.getUTCHours();
                    let endMinute = end.getUTCMinutes();
                    if (hourNow >= startHour && hourNow <= endHour) {
                      if (hourNow == startHour) {
                        if (minuteNow >= startMinute) {
                          pushStore.oppenned = true;
                        }
                      } else if (hourNow == endHour) {
                        if (minuteNow <= endMinute) {
                          pushStore.oppenned = true;
                        }
                      } else {
                        pushStore.oppenned = true;
                      }
                    }
                  }
                });
              });
            storeList.push(pushStore);
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
