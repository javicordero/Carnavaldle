import { Injectable } from '@angular/core';
import { Agrupacion } from '../models/agrupacion.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgrupacionesService {
  agrupacionesList: Agrupacion[] = [
    {
      _id: '1',
      name: 'Los millonarios',
    },
    {
      _id: '2',
      name: 'La eternidad',
    },
    {
      _id: '3',
      name: 'La eterna banda del capitán veneno',
    },
    {
      _id: '4',
      name: 'La banda del capitán veneno',
    },
    {
      _id: '5',
      name: 'Daddy Cádiz',
    },
    {
      _id: '6',
      name: 'Lassss envenenássss',
    },
    {
      _id: '7',
      name: 'Los niños sin nombre',
    },
  ];
  constructor() {}

  getAgrupaciones(): Observable<Agrupacion[]> {
    return of(this.agrupacionesList);
  }
}
