import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Carnavaldle';

  loggedUser$: Observable<User>;
  loggedUser: User;

  private readonly usersService = inject(UsersService);

  ngOnInit() {
    this.login();
  }

  login() {
    this.loggedUser$ = this.usersService.getLoggedUser();
    this.loggedUser$.subscribe((user) => {
      this.loggedUser = user;
    });
  }
}
