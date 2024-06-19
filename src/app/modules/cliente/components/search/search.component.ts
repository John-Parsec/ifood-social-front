import { Component } from "@angular/core";
import { DatabaseService } from "../../services/database.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.css",
})
export class SearchComponent {
  search: string = "";
  stores: any;
  products: any;
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
      console.log(this.stores);
    });
  }

  redirectToStore(id: number) {
    this.router.navigate(["/catalogo", id]);
  }

  onModoChange(event: any) {
    this.idModoBusca = event.value;
  }
}
