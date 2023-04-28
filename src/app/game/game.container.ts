import { Component, OnInit } from '@angular/core';
import { Agrupacion } from '../models/agrupacion.model';
import { Observable } from 'rxjs';
import { AgrupacionesService } from '../services/agrupaciones.service';
import { PiecesService } from '../services/pieces.service';
import { Piece } from '../models/piece.model';

@Component({
  selector: 'app-game-container',
  templateUrl: './game.container.html',
  styleUrls: ['./game.container.scss'],
})
export class GameContainer implements OnInit {
  // TODO: Esto sería la agrupación de la pieza aleatoria que viene desde el servicio para iniciar el juego
  agrupacionId: string;

  agrupacionesList$: Observable<Agrupacion[]> = this.agrupacionesService.getAgrupaciones();
  agrupacionesList: Agrupacion[] = [];

  answersList: Agrupacion[] = [];

  piece: Piece;
  quote: string;
  quoteIndex: number = 0;

  tries: number = 0;

  constructor(
    private agrupacionesService: AgrupacionesService,
    private piecesServices: PiecesService
  ) {}

  ngOnInit(): void {
    this.startGame();
  }

  selectAgrupacion(agrup: Agrupacion) {
    this.tries++;
    if (this.tries >= 3) {
      this.gameOver();
      return;
    }
    // No acierta la agrupacion
    if (this.agrupacionId !== agrup._id) {
      if (!this.answersList.includes(agrup)) {
        this.answersList.push(agrup);
      }
      this.quoteIndex++;
      this.quote = this.piece.quotes[this.quoteIndex];
      // Borra del listado de agrupaciones la fallida
      this.agrupacionesList = this.agrupacionesList.filter(
        (agrupacion) => agrupacion._id !== agrup._id
      );
      return;
    }
    // Acierta la agrupacion
    // TODO: ALert y resto del flujo
    alert('Acierto');
    this.startGame();
  }

  startGame() {
    // Reset values
    this.tries = 0;
    this.quoteIndex = 0;
    this.answersList = [];

    this.piece = this.piecesServices.getRandomPiece();
    this.agrupacionId = this.piece.agrupacionId;
    this.quote = this.piece.quotes[this.quoteIndex];

    this.agrupacionesList$.subscribe((agrupaciones) => {
      this.agrupacionesList = agrupaciones;
    });
  }

  gameOver() {
    alert('Game Over');
    this.startGame();
  }
}
