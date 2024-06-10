import { Component, Input } from "@angular/core";
import { Store } from "../../models/store";

@Component({
  selector: "app-store-list",
  templateUrl: "./store-list.component.html",
  styleUrl: "./store-list.component.css",
})
export class StoreListComponent {
  @Input() stores: Store[] = [];
}
