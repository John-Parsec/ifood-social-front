import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CarouselModule } from "primeng/carousel";
import { TagModule } from "primeng/tag";

// import { StoreListComponent } from "./components/store-list/store-list.component";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { FormsModule } from "@angular/forms";
import { StoreCatalogComponent } from "./components/store-catalog/store-catalog.component";

import { MessageService } from "primeng/api";

import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { MessageModule } from "primeng/message";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { CardModule } from "primeng/card";
import { ToastModule } from "primeng/toast";
import { TableModule } from "primeng/table";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { ToolbarModule } from "primeng/toolbar";
import { MenubarModule } from "primeng/menubar";
import { DataViewModule } from "primeng/dataview";
import { SelectButtonModule } from "primeng/selectbutton";
import { AvatarModule } from "primeng/avatar";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    // StoreListComponent,
    StoreCatalogComponent,
  ],
  imports: [
    CommonModule,
    OverlayPanelModule,
    FormsModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    InputTextModule,
    ButtonModule,
    MessageModule,
    ProgressSpinnerModule,
    CardModule,
    ToastModule,
    TableModule,
    DropdownModule,
    ToolbarModule,
    MenubarModule,
    DataViewModule,
    SelectButtonModule,
    AvatarModule,
    HttpClientModule,
  ],
  exports: [HomeComponent, NavbarComponent, FooterComponent],
  providers: [MessageService],
})
export class ClienteModule {}
