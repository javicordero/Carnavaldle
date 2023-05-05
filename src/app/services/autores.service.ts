import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Autor } from '../models/autor.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutoresService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:3000/api/v1/autores';

  getAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>(`${this.url}/`);
    // return of(this.agrupacionesList);
  }
}
