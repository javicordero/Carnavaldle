import { Component, OnInit } from '@angular/core';
import { AgrupacionesService } from '../services/agrupaciones.service';
import { AutoresService } from '../services/autores.service';
import { Autor } from '../models/autor.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-collaborate',
  templateUrl: './collaborate.component.html',
  styleUrls: ['./collaborate.component.scss'],
})
export class CollaborateComponent implements OnInit {
  autoresList$: Observable<Autor[]>;
  autoresList: Autor[];
  constructor(
    private agrupacionesService: AgrupacionesService,
    private autoresService: AutoresService
  ) {}

  ngOnInit(): void {
    this.agrupacionesService.getAgrupaciones().subscribe((data) => {
      // console.log(data);
    });
    this.autoresList$ = this.autoresService.getAutores();
  }
}
