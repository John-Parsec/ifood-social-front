import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "../../models/product";
import { Store } from "../../models/store";
import { SacolaService } from "../../services/sacola.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrl: "./product-details.component.css",
})
export class ProductDetailsComponent {
  imgPath = "../../../../../assets/imgs/icon-image-not-found-free-vector.jpg";

  @Input() store: Store | undefined;
  @Input() product: Product | undefined;
  @Input() visible = true;
  @Output() visibleChange = new EventEmitter<boolean>();
  observacoes: string = "";

  constructor(private sacolaService: SacolaService) {}

  onDialogHide() {
    this.visibleChange.emit(false);
  }

  addToSacola() {
    if (!this.product) {
      return;
    }

    this.sacolaService.adicionar(this.product, this.observacoes);
    this.onDialogHide();
  }
}
