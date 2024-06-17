import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./modules/cliente/components/home/home.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { StoreCatalogComponent } from "./modules/cliente/components/store-catalog/store-catalog.component";
import { CartComponent } from "./modules/cliente/components/cart/cart.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "catalogo/:id", component: StoreCatalogComponent },
  { path: "cart", component: CartComponent },
  { path: "**", component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
