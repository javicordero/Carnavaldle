import { Injectable } from '@angular/core';
import { MatchResults } from '../models/match-result.class';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  currentMatch: Subject<MatchResults> = new Subject();
  constructor() {}

  startNewMatch() {
    // Start the match
    this.currentMatch.next(new MatchResults());
    console.log('start match');
  }

  setMatch(match: MatchResults) {
    // Set the match result
    this.currentMatch.next(match);
    console.log('set match', match);
  }
}
