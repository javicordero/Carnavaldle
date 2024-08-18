import { Injectable } from '@angular/core';
import { Agrupacion } from '../models/agrupacion.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AgrupacionesService {
  constructor(private http: HttpClient) {}

  // url: string = 'https://carnavaldle-back.onrender.com/api/v1/agrupaciones';
  url: string = 'https://carnavaldle-back.onrender.com/api/v1/agrupaciones';

  getAgrupaciones(): Observable<Agrupacion[]> {
    return this.http.get<Agrupacion[]>(`${this.url}/`);
    // return of(this.agrupacionesList);
  }

  createAgrupacion(agrupacion: Agrupacion): Observable<Agrupacion> {
    return this.http.post<Agrupacion>(`${this.url}/`, agrupacion);
  }
}
