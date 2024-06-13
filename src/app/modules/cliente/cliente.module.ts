import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ToolbarModule } from "primeng/toolbar";
import { InputTextModule } from "primeng/inputtext";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { FormsModule } from "@angular/forms";
import { CarouselModule } from "primeng/carousel";
import { ButtonModule } from "primeng/button";
import { TagModule } from "primeng/tag";

@NgModule({
  declarations: [HomeComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    ToolbarModule,
    InputTextModule,
    OverlayPanelModule,
    FormsModule,
    CarouselModule,
    ButtonModule,
    TagModule,
  ],
  exports: [HomeComponent, NavbarComponent, FooterComponent],
})
export class ClienteModule {}
