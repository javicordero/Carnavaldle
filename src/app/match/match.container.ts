import { Component, inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MatchResults } from '../models/match-result.class';
import * as actions from '../store/actions';
import * as selectors from '../store/selectors';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-match',
  templateUrl: './match.container.html',
  styleUrls: ['./match.container.scss'],
})
export class MatchContainer implements OnInit {
  // Services
  private readonly store: Store = inject(Store);

  // Match
  isMatchStarted: boolean = false;
  currentMatchResults: MatchResults;

  buttonText: string = 'Empezar';

  ngOnInit(): void {
    this.store
      .select(selectors.selectMatchResults)
      .subscribe((matchResults: MatchResults) => {
        this.currentMatchResults = matchResults;
        console.log(matchResults);
      });

    this.store
      .select(selectors.selectIsMatchStarted)
      .subscribe((isMatchStarted: boolean) => {
        this.isMatchStarted = isMatchStarted;
        console.log(isMatchStarted);
        if (this.isMatchStarted) {
          this.buttonText = 'Siguiente';
        } else {
          this.buttonText = 'Empezar';
        }
      });
  }

  startNewMatch() {
    this.store.dispatch(actions.setIsMatchStarted({ isMatchStarted: true }));
  }

  setMatchResults(match: MatchResults) {
    // Set the match result
    // this.currentMatch.next(match);
    console.log('set match', match);
  }

  gameOver() {
    this.store.dispatch(actions.setIsMatchStarted({ isMatchStarted: false }));
  }

  gameWin(aLaPrimera: boolean) {
    this.store.dispatch(
      actions.setMatchResults({
        matchResults: {
          ...this.currentMatchResults,
          numeroJugadas: this.currentMatchResults.numeroJugadas + 1,
          numeroAciertos: this.currentMatchResults.numeroAciertos + 1,
          numeroALaPrimera: aLaPrimera
            ? this.currentMatchResults.numeroALaPrimera + 1
            : this.currentMatchResults.numeroALaPrimera,
        },
      })
    );
  }
}
