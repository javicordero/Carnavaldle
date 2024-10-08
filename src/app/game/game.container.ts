import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { Agrupacion } from '../models/agrupacion.model';
import { Observable, Subject, take } from 'rxjs';
import { AgrupacionesService } from '../services/agrupaciones.service';
import { PiecesService } from '../services/pieces.service';
import { Piece } from '../models/piece.model';
import { Answer } from '../models/answer.model';
import { MatchesService } from '../services/matches.service';
import { MatchResults } from '../models/match-result.class';
import * as selectors from '../store/selectors';
import { Store } from '@ngrx/store';
import * as actions from '../store/actions';

@Component({
  selector: 'app-game-container',
  templateUrl: './game.container.html',
  styleUrls: ['./game.container.scss'],
})
export class GameContainer implements OnInit {
  // Services
  private readonly agrupacionesService = inject(AgrupacionesService);
  private readonly piecesService = inject(PiecesService);
  private readonly MatchesService = inject(MatchesService);
  private readonly store: Store = inject(Store);

  // Game
  piece: Piece;
  gameStarted: boolean = false;

  // Guessbox
  agrupacionesList$: Observable<Agrupacion[]>;
  agrupacionesList: Agrupacion[] = [];

  // Answers
  answersList: Answer[] = [];

  // Quotes
  quote: string = 'Si caminito del falla';
  quoteIndex: number = 0;
  quoteIndex$: Subject<number> = new Subject();
  quotesList: string[] = ['Si caminito del falla'];

  // Tries
  tries$: Subject<number> = new Subject();
  tries: number = 1;
  maxTries: number = 3;

  // Timer
  timeLeft: number = 10;
  interval: number;
  timeLeft$: Subject<number> = new Subject();

  // Button
  @Input() buttonText: string = 'Empezar';

  // Match
  isMatchStarted: boolean = false;
  currentMatchResults!: MatchResults;
  @Output() startMatchEvent: EventEmitter<any> = new EventEmitter();
  @Output() gameOverEvent: EventEmitter<any> = new EventEmitter();
  @Output() gameWinEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    this.agrupacionesList$ = this.agrupacionesService.getAgrupaciones();
  }

  ngOnInit(): void {
    this.tries$.subscribe((tries) => {
      this.tries = tries;
      if (this.tries > this.maxTries) {
        this.tries = 3;
        this.gameOver();
        return;
      }
      this.quoteIndex++;
      this.quoteIndex$.next(this.quoteIndex);
      this.quote = this.piece.quotes[this.quoteIndex];
      this.quotesList.push(this.quote);
    });

    // this.store
    //   .select(selectors.selectMatchResults)
    //   .subscribe((matchResults: MatchResults) => {
    //     this.currentMatchResults = matchResults;
    //     console.log(matchResults);
    //   });

    // this.store
    //   .select(selectors.selectIsMatchStarted)
    //   .subscribe((isMatchStarted: boolean) => {
    //     this.isMatchStarted = isMatchStarted;
    //     console.log(isMatchStarted);
    //     if (this.isMatchStarted) {
    //       this.buttonText = 'Siguiente';
    //     } else {
    //       this.buttonText = 'Empezar';
    //     }
    //   });

    this.agrupacionesList$.subscribe((agrupaciones) => {
      this.agrupacionesList = agrupaciones;
    });
  }

  selectAgrupacion(agrup: Agrupacion) {
    // No acierta la agrupacion
    this.timeLeft = 10;
    this.timeLeft$.next(this.timeLeft);
    let answer: Answer = { agrupacion: agrup, isCorrect: false };

    if (this.piece.agrupacion._id !== agrup._id) {
      this.answersList.push(answer);
      this.tries$.next(this.tries + 1);
      // Borra del listado de agrupaciones la fallida
      this.agrupacionesList = this.agrupacionesList.filter(
        (agrupacion) => agrupacion._id !== agrup._id
      );
      return;
    }
    answer.isCorrect = true;
    this.answersList.push(answer);
    this.gameWin();
  }

  startGame() {
    if (this.isMatchStarted == false) {
      this.startMatchEvent.emit();
    }
    // Reset values
    this.tries = 1;
    this.quoteIndex = 0;
    this.answersList = [];
    this.quotesList = [];
    this.piecesService
      .getRandomPiece()
      .pipe(take(1))
      .subscribe((piece) => {
        this.piece = piece;
        this.quote = this.piece.quotes[this.quoteIndex];
        this.quotesList.push(this.quote);
      });

    this.startTimer();
    this.gameStarted = true;
    this.agrupacionesList$.subscribe((agrupaciones) => {
      this.agrupacionesList = agrupaciones;
    });
  }

  stopGame() {
    this.gameStarted = false;
    this.pauseTimer();
  }

  gameWin() {
    this.stopGame();
    this.gameWinEvent.emit(this.tries === 1);

    // alert('Acierto');
  }

  gameOver() {
    this.stopGame();
    this.store.dispatch(actions.setIsMatchStarted({ isMatchStarted: false }));

    // alert('Game Over');
  }

  startTimer() {
    this.interval = window.setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.timeLeft$.next(this.timeLeft);
      } else {
        this.timeLeft = 10;
        this.tries$.next(this.tries + 1);
        this.timeLeft$.next(this.timeLeft);
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
