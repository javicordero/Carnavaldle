import { Injectable } from '@angular/core';
import { Agrupacion } from '../models/agrupacion.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgrupacionesService {
  agrupacionesList: Agrupacion[] = [
    {
      _id: 1,
      name: 'Los millonarios',
    },
    {
      _id: 2,
      name: 'La eternidad',
    },
    {
      _id: 3,
      name: 'La eterna banda del capitán veneno',
    },
  ];
  constructor() {}

  getAgrupaciones(): Observable<Agrupacion[]> {
    return of(this.agrupacionesList);
  }
}
