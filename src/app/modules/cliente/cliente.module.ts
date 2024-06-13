import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ToolbarModule } from "primeng/toolbar";
import { StoreListComponent } from "./components/store-list/store-list.component";
import { InputTextModule } from "primeng/inputtext";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    StoreListComponent,
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    InputTextModule,
    OverlayPanelModule,
    FormsModule,
  ],
  exports: [HomeComponent, NavbarComponent, FooterComponent],
})
export class ClienteModule {}
