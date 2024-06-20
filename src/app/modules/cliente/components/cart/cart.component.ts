import { Component } from "@angular/core";
import { Product } from "../../models/product";
import { Store } from "../../models/store";
import { Router } from "@angular/router";
import { SacolaService } from "../../services/sacola.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrl: "./cart.component.css",
})
export class CartComponent {
  imgPath = "../../../../../assets/imgs/icon-image-not-found-free-vector.jpg";
  private produtosSubscription: Subscription;

  store: Store = {
    id: 1,
    name: "Loja 1",
    description: "Descrição da loja 1",
    pathImage: this.imgPath,
    deliveryFee: 10,
    rating: 4,
  };

  products: Product[] = [];

  constructor(private router: Router, private sacolaService: SacolaService) {
    this.produtosSubscription = this.sacolaService.produtos.subscribe(
      (produtos) => {
        this.products = produtos;
      }
    );
  }

  minusQtde(product: Product) {
    if (product.quantity && product.quantity > 0) {
      this.sacolaService.minusQtde(product);
    }
  }

  plusQtde(product: Product) {
    if (product.quantity) {
      this.sacolaService.plusQtde(product);
    }
  }

  removeItem(product: Product) {
    this.sacolaService.remover(product);
  }

  precoTotal() {
    if (!this.products) {
      return 0;
    }

    return (
      this.products.reduce(
        (acc, product) => acc + product.price * (product.quantity ?? 0),
        0
      ) + this.store.deliveryFee
    );
  }

  detalharProduto(product: Product) {
    this.router.navigate(["catalogo/", this.store.id], {
      queryParams: { product: product.id },
    });
  }

  finalizarPedido() {
    alert("Pedido finalizado");
  }

  ngOnDestroy() {
    this.produtosSubscription.unsubscribe();
  }
}
