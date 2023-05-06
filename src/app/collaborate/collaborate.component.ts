import { Component, OnInit } from '@angular/core';
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

  constructor(private autoresService: AutoresService) {}

  ngOnInit(): void {
    this.autoresList$ = this.autoresService.getAutores();
  }
}
