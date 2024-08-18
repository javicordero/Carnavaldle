import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:3000/api/v1/users';

  mockedUser: User = {
    _id: '1',
    username: 'User1',
    password: 'XXXXXX',
    email: 'user@example.com',
    gamesPlayed: 0,
    gamesWon: 0,
    gamesWonFirstTry: 0,
    streak: 0,
    maxStreak: 0,
  };

  mockedUser2: User = {
    _id: '2',
    username: 'XXXXX',
    password: 'XXXXXX',
    email: 'XXXXXXXXXXXXXXXX',
    gamesPlayed: 0,
    gamesWon: 0,
    gamesWonFirstTry: 0,
    streak: 0,
    maxStreak: 0,
  };

  mockedUser3: User = {
    _id: '2',
    username: 'XXXXX',
    password: 'XXXXXX',
    email: 'XXXXXXXXXXXXXXXX',
    gamesPlayed: 0,
    gamesWon: 0,
    gamesWonFirstTry: 0,
    streak: 0,
    maxStreak: 0,
  };

  mockedUser4: User = {
    _id: '2',
    username: 'XXXXX',
    password: 'XXXXXX',
    email: 'XXXXXXXXXXXXXXXX',
    gamesPlayed: 0,
    gamesWon: 0,
    gamesWonFirstTry: 0,
    streak: 0,
    maxStreak: 0,
  };

  mockedUser5: User = {
    _id: '2',
    username: 'XXXXX',
    password: 'XXXXXX',
    email: 'XXXXXXXXXXXXXXXX',
    gamesPlayed: 0,
    gamesWon: 0,
    gamesWonFirstTry: 0,
    streak: 0,
    maxStreak: 0,
  };

  mockedUser6: User = {
    _id: '2',
    username: 'XXXXX',
    password: 'XXXXXX',
    email: 'XXXXXXXXXXXXXXXX',
    gamesPlayed: 0,
    gamesWon: 0,
    gamesWonFirstTry: 0,
    streak: 0,
    maxStreak: 0,
  };
  mockedUser7: User = {
    _id: '2',
    username: 'XXXXX',
    password: 'XXXXXX',
    email: 'XXXXXXXXXXXXXXXX',
    gamesPlayed: 0,
    gamesWon: 0,
    gamesWonFirstTry: 0,
    streak: 0,
    maxStreak: 0,
  };
  mockedUser8: User = {
    _id: '2',
    username: 'XXXXX',
    password: 'XXXXXX',
    email: 'XXXXXXXXXXXXXXXX',
    gamesPlayed: 0,
    gamesWon: 0,
    gamesWonFirstTry: 0,
    streak: 0,
    maxStreak: 0,
  };
  mockedUser9: User = {
    _id: '2',
    username: 'XXXXX',
    password: 'XXXXXX',
    email: 'XXXXXXXXXXXXXXXX',
    gamesPlayed: 0,
    gamesWon: 0,
    gamesWonFirstTry: 0,
    streak: 0,
    maxStreak: 0,
  };
  mockedUser10: User = {
    _id: '2',
    username: 'XXXXX',
    password: 'XXXXXX',
    email: 'XXXXXXXXXXXXXXXX',
    gamesPlayed: 0,
    gamesWon: 0,
    gamesWonFirstTry: 0,
    streak: 0,
    maxStreak: 0,
  };
  mockedUser11: User = {
    _id: '2',
    username: 'XXXXX',
    password: 'XXXXXX',
    email: 'XXXXXXXXXXXXXXXX',
    gamesPlayed: 0,
    gamesWon: 0,
    gamesWonFirstTry: 0,
    streak: 0,
    maxStreak: 0,
  };
  mockedUser12: User = {
    _id: '2',
    username: 'XXXXX',
    password: 'XXXXXX',
    email: 'XXXXXXXXXXXXXXXX',
    gamesPlayed: 0,
    gamesWon: 0,
    gamesWonFirstTry: 0,
    streak: 0,
    maxStreak: 0,
  };
  mockedUser13: User = {
    _id: '2',
    username: 'XXXXX',
    password: 'XXXXXX',
    email: 'XXXXXXXXXXXXXXXX',
    gamesPlayed: 4,
    gamesWon: 2,
    gamesWonFirstTry: 2,
    streak: 3,
    maxStreak: 2,
  };
  mockedUser14: User = {
    _id: '2',
    username: 'XXXXX',
    password: 'XXXXXX',
    email: 'XXXXXXXXXXXXXXXX',
    gamesPlayed: 12,
    gamesWon: 10,
    gamesWonFirstTry: 7,
    streak: 0,
    maxStreak: 0,
  };

  allUsers: User[] = [
    this.mockedUser,
    this.mockedUser2,
    this.mockedUser3,
    this.mockedUser4,
    this.mockedUser5,
    this.mockedUser6,
    this.mockedUser7,
    this.mockedUser8,
    this.mockedUser9,
    this.mockedUser10,
    this.mockedUser11,
    this.mockedUser12,
    this.mockedUser13,
    this.mockedUser14,
  ];

  getLoggedUser(): Observable<User> {
    return of(this.mockedUser);
  }

  getAllUsers(): Observable<User[]> {
    return of(this.allUsers);
  }

  signUp(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/`, user);
  }

  signIn(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/login/`, user);
  }
}
