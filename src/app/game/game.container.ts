import { Component, OnInit } from '@angular/core';
import { Agrupacion } from '../models/agrupacion.model';
import { Observable, Subject } from 'rxjs';
import { AgrupacionesService } from '../services/agrupaciones.service';
import { PiecesService } from '../services/pieces.service';
import { Piece } from '../models/piece.model';
import { Answer } from '../models/answer.model';

@Component({
  selector: 'app-game-container',
  templateUrl: './game.container.html',
  styleUrls: ['./game.container.scss'],
})
export class GameContainer implements OnInit {
  // Game
  piece: Piece;
  gameStarted: boolean = false;

  // Guessbox
  agrupacionesList$: Observable<Agrupacion[]> = this.agrupacionesService.getAgrupaciones();
  agrupacionesList: Agrupacion[] = [];

  // Answers
  answersList: Answer[] = [];

  // Quote
  quote: string = 'Si caminito del falla';
  quoteIndex: number = 0;

  // Tries
  tries$: Subject<number> = new Subject();
  tries: number = 1;
  maxTries: number = 3;

  // Timer
  timeLeft: number = 10;
  interval: number;

  constructor(
    private agrupacionesService: AgrupacionesService,
    private piecesServices: PiecesService
  ) {}

  ngOnInit(): void {
    this.tries$.subscribe((tries) => {
      this.tries = tries;
      if (this.tries > this.maxTries) {
        this.tries = 3;
        this.gameOver();
        return;
      }
      this.quoteIndex++;
      this.quote = this.piece.quotes[this.quoteIndex];
    });

    this.agrupacionesList$.subscribe((agrupaciones) => {
      this.agrupacionesList = agrupaciones;
    });
  }

  selectAgrupacion(agrup: Agrupacion) {
    // No acierta la agrupacion
    this.timeLeft = 10;
    let answer: Answer = { agrupacion: agrup, isCorrect: false };

    if (this.piece.agrupacionId !== agrup._id) {
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
    // Reset values
    this.tries = 1;
    this.quoteIndex = 0;
    this.answersList = [];
    this.piece = this.piecesServices.getRandomPiece();
    this.quote = this.piece.quotes[this.quoteIndex];
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
    alert('Acierto');
  }

  gameOver() {
    this.stopGame();
    // alert('Game Over');
  }

  startTimer() {
    this.interval = window.setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 10;
        this.tries$.next(this.tries + 1);
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
