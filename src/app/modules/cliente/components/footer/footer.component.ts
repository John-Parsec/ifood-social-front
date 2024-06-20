import { Component } from '@angular/core';
import { User } from '../../models/user';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  users: User[] = this.databaseService.users;
  userSelected: User = this.databaseService.userAtual;

  constructor(private databaseService: DatabaseService) { }

  changeUser(user: User) {
    this.databaseService.userAtual = user;
  }
}
