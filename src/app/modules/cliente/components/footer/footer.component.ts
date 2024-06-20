import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { User } from "../../models/user";
import { DatabaseService } from "../../services/database.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent implements OnInit {
  users: User[] = [];
  userSelected: User = {} as User;

  constructor(private databaseService: DatabaseService) {}

  ngOnInit(): void {
    this.databaseService.getClients().subscribe((users: any) => {
      users.forEach((user: any) => {
        let pushUser = {
          id: user.cod_cliente,
          name: user.nome_cliente,
          address: user.dcr_endereco,
          complement: user.dcr_complemento,
        };
        this.users = [...this.users, pushUser];
      });
      this.userSelected = this.users[0];
      this.databaseService.userAtual = this.userSelected;
    });
  }

  changeUser(user: User) {
    this.databaseService.userAtual = user;
  }
}
