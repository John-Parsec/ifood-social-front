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
  stores: any;
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
      this.stores = stores;
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
          this.stores = stores;
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
