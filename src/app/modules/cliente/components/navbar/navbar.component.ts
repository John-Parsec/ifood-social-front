import { Component } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: "Home",
        icon: "pi pi-home",
      },
      {
        label: "Features",
        icon: "pi pi-star",
      },
      {
        label: "Projects",
        icon: "pi pi-search",
        items: [
          {
            label: "Core",
            icon: "pi pi-bolt",
            shortcut: "⌘+S",
          },
          {
            label: "Blocks",
            icon: "pi pi-server",
            shortcut: "⌘+B",
          },
          {
            label: "UI Kit",
            icon: "pi pi-pencil",
            shortcut: "⌘+U",
          },
          {
            separator: true,
          },
          {
            label: "Templates",
            icon: "pi pi-palette",
            items: [
              {
                label: "Apollo",
                icon: "pi pi-palette",
                badge: "2",
              },
              {
                label: "Ultima",
                icon: "pi pi-palette",
                badge: "3",
              },
            ],
          },
        ],
      },
    ];
  }
}
