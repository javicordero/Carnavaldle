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
  agrupacionesList$: Observable<Agrupacion[]> = this.agrupacionesService.getAgrupaciones();

  constructor(private agrupacionesService: AgrupacionesService) {}

  selectAgrupacion(event: Agrupacion) {
    console.log(event);
  }
}
