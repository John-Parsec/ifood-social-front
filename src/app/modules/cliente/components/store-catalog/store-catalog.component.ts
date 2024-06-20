import { DatabaseService } from "./../../services/database.service";
import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../../models/product";
import { Store } from "../../models/store";

@Component({
  selector: "app-store-catalog",
  templateUrl: "./store-catalog.component.html",
  styleUrl: "./store-catalog.component.css",
})
export class StoreCatalogComponent implements OnInit {
  lojaPath = "../../../../../assets/imgs/logo_padrao_loja.png";
  produtoPath = "../../../../../assets/imgs/foto_padrao_produto.png";

  id: number;
  store: Store = {
    id: 0,
    name: '',
    description: '',
    rating: 0,
    pathImage: '',
    deliveryFee: 0,
  };

  products: Product[] = [];
  productsFiltered: Product[] = this.products;
  
  categorias: any[] = [{ id: "0", name: "Tudo" }];
  idCategoriaSelecionada = "0";

  layout: "list" | "grid" = "grid";

  @Input() displayProductDetails = false;
  productToShow: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private database: DatabaseService
  ) {
    this.id = this.route.snapshot.params["id"];
    console.log(this.id);

    this.database.getStoreById(this.id).subscribe((store) => {
      this.store.id = store.cod_cod_empreedimento;
      this.store.name = store.dcr_nome_fantasia;
      this.store.description = `Descricao do empreendimento '${store.dcr_nome_fantasia}'`;
      this.store.pathImage = this.lojaPath;
    });
  }

  ngOnInit() {
    this.database.getCategoriesByStore(this.id).subscribe((categories) => {
      categories.forEach((element: any) => {
        this.categorias = [
          ...this.categorias,
          { id: element.cod_categoria.toString(), name: element.dcr_categoria },
        ];
        element.produtos.forEach((product: any) => {
          this.products.push({
            id: product.cod_produto,
            name: product.dcr_produto,
            price: product.vlr_produto,
            image: this.produtoPath,
            rating: 5,
            category: element.dcr_categoria,
            description: `Descrição do produto '${product.dcr_produto}'`,
          });
        });
      });
      console.log(this.categorias);
    });
  }

  filtrarCategoria(categoria: string) {
    if (categoria === "Tudo") {
      this.productsFiltered = this.products;
      return;
    }

    this.productsFiltered = this.products.filter(
      (product) => product.category === categoria
    );
  }

  onCategoriaChange(event: any) {
    this.idCategoriaSelecionada = event.value;

    const categoria = this.categorias.find(
      (categoria) => categoria.id === this.idCategoriaSelecionada
    );

    if (categoria) {
      this.filtrarCategoria(categoria.name);
    }
  }

  get productsByCategory() {
    const groupedProducts: { [category: string]: Product[] } = {};

    for (const product of this.productsFiltered) {
      if (!groupedProducts[product.category]) {
        groupedProducts[product.category] = [];
      }
      groupedProducts[product.category].push(product);
    }

    return groupedProducts;
  }

  openProductDetails(produto: Product) {
    this.productToShow = produto;
    this.displayProductDetails = true;
  }

  onDialogVisibleChange(visible: boolean) {
    this.displayProductDetails = visible;
  }
}
