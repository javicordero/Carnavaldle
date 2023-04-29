import { Component, OnInit, inject } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.container.html',
  styleUrls: ['./leaderboard.container.scss'],
})
export class LeaderboardContainer implements OnInit {
  private readonly usersService = inject(UsersService);

  allUsers$: Observable<User[]>;
  loggedUser$: Observable<User>;

  ngOnInit(): void {
    this.allUsers$ = this.usersService.getAllUsers();
    this.loggedUser$ = this.usersService.getLoggedUser();
  }
}
