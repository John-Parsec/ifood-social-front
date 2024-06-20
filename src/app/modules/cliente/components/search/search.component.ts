import { Component } from "@angular/core";
import { DatabaseService } from "../../services/database.service";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.css",
})
export class SearchComponent {
  search: string = "";
  stores: any[] = [];
  products: any[] = [];
  allStores: any;
  modos: any[] = [
    { id: 0, name: "Estabelecimentos" },
    { id: 1, name: "Produtos" },
  ];
  idModoBusca: number = 0;
  constructor(
    private databaseService: DatabaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.search = this.route.snapshot.params["search"];
    this.databaseService.getStoreByName(this.search).subscribe((stores) => {
      stores.forEach((store: any) => {
        let pushStore = store;
        pushStore.oppenned = false;

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
        this.stores.push(pushStore);
      });
    });

    this.databaseService.getStores().subscribe((stores) => {
      this.allStores = stores;
    });

    this.databaseService
      .getProductsByName(this.search)
      .subscribe((products) => {
        products.forEach((product: any) => {
          const empreendimento = this.allStores.find(
            (store: any) =>
              store.cod_empreedimento === product.cod_empreedimento
          );
          const updatedProduct = {
            ...product,
            empreendimento: empreendimento?.dcr_nome_fantasia,
          };
          this.products.push(updatedProduct);
        });
      });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.search = this.route.snapshot.params["search"];
        this.databaseService.getStoreByName(this.search).subscribe((stores) => {
          stores.forEach((store: any) => {
            let pushStore = store;
            pushStore.oppenned = false;

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
            this.stores.push(pushStore);
          });
        });

        this.databaseService
          .getProductsByName(this.search)
          .subscribe((products) => {
            this.products = [];
            products.forEach((product: any) => {
              const empreendimento = this.allStores.find(
                (store: any) =>
                  store.cod_empreedimento === product.cod_empreedimento
              );
              const updatedProduct = {
                ...product,
                empreendimento: empreendimento?.dcr_nome_fantasia,
              };
              this.products.push(updatedProduct);
            });
          });
      });
  }

  redirectToStore(id: number) {
    this.router.navigate(["/catalogo", id]);
  }

  onModoChange(event: any) {
    this.idModoBusca = event.value;
  }
}
