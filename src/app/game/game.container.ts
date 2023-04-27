import { Component } from '@angular/core';
import { Agrupacion } from '../models/agrupacion.model';
import { Observable } from 'rxjs';
import { AgrupacionesService } from '../services/agrupaciones.service';

@Component({
  selector: 'app-game-container',
  templateUrl: './game.container.html',
  styleUrls: ['./game.container.scss'],
})
export class GameContainer {
  // TODO: Esto sería la agrupación de la pieza aleatoria que viene desde el servicio para iniciar el juego
  agrupacion: Agrupacion = {
    _id: 2,
    name: 'La eternidad',
  };

  agrupacionesList$: Observable<Agrupacion[]> = this.agrupacionesService.getAgrupaciones();
  answersList: Agrupacion[] = [];
  constructor(private agrupacionesService: AgrupacionesService) {}

  selectAgrupacion(agrup: Agrupacion) {
    // No acierta la agrupacion
    if (this.agrupacion._id !== agrup._id && !this.answersList.includes(agrup)) {
      this.answersList.push(agrup);
      return;
    }
    // Acierta la agrupacion
    // TODO: ALert y resto del flujo
  }
}
