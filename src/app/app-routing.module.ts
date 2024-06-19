import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./modules/cliente/components/home/home.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { StoreCatalogComponent } from "./modules/cliente/components/store-catalog/store-catalog.component";
import { SearchComponent } from "./modules/cliente/components/search/search.component";
import { CartComponent } from "./modules/cliente/components/cart/cart.component";
import { ProductDetailsComponent } from "./modules/cliente/components/product-details/product-details.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "catalogo/:catalogId", component: StoreCatalogComponent },
  { path: "search/:search", component: SearchComponent },
  { path: "cart", component: CartComponent },
  { path: "**", component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
