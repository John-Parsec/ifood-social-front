import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MenubarModule } from "primeng/menubar";
import { StoreListComponent } from './components/store-list/store-list.component';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, FooterComponent, StoreListComponent],
  imports: [CommonModule, MenubarModule],
  exports: [HomeComponent, NavbarComponent, FooterComponent],
})
export class ClienteModule {}
