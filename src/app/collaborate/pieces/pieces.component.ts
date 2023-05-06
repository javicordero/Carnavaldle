import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ReplaySubject, Subscription, takeUntil } from 'rxjs';
import { Agrupacion } from 'src/app/models/agrupacion.model';
import { Piece } from 'src/app/models/piece.model';
import { AgrupacionesService } from 'src/app/services/agrupaciones.service';
import { PiecesService } from 'src/app/services/pieces.service';

@Component({
  selector: 'app-pieces',
  templateUrl: './pieces.component.html',
  styleUrls: ['./pieces.component.scss'],
})
export class PiecesComponent implements OnInit, OnDestroy {
  private pieceSuscription: Subscription;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  agrupacionesList: Agrupacion[] = [];

  // Form
  form: FormGroup = new FormGroup({});
  lyricsCtrl: FormControl = new FormControl('', Validators.required);
  agrupacionCtrl: FormControl = new FormControl('', Validators.required);
  partCtrl: FormControl = new FormControl('', Validators.required);
  formControlErrorMatcher = new CustomErrorStateMatcher();

  // Select agrupaciones
  agrupacionesSelect: FormControl = new FormControl();
  filteredAgrupaciones: Agrupacion[];

  constructor(
    private readonly piecesService: PiecesService,
    private readonly agrupacionesService: AgrupacionesService
  ) {
    this.form.setControl('lyrics', this.lyricsCtrl);
    this.form.setControl('agrupacion', this.agrupacionCtrl);
    this.form.setControl('part', this.partCtrl);
  }

  ngOnInit() {
    // Inicia las listas
    this.agrupacionesService
      .getAgrupaciones()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((agrupaciones: Agrupacion[]) => {
        this.agrupacionesList = agrupaciones;
        this.filteredAgrupaciones = this.agrupacionesList;
      });

    // Al crear una pieza regarga las listas
    this.pieceSuscription = this.piecesService.refresh$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.agrupacionesService
          .getAgrupaciones()
          .pipe(takeUntil(this.destroyed$))
          .subscribe((agrupaciones: Agrupacion[]) => {
            this.agrupacionesList = agrupaciones;
            this.filteredAgrupaciones = this.agrupacionesList;

            this.agrupacionCtrl.setValue(
              this.filteredAgrupaciones.filter(
                (agrup) => agrup._id === this.agrupacionCtrl.value._id
              )[0]
            );
          });
      });

    this.agrupacionesSelect.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe((val) => {
      this.filterAutoresMulti(val);
    });
  }

  filterAutoresMulti(value: string) {
    this.filteredAgrupaciones = this.agrupacionesList.filter((agrupacion) =>
      agrupacion.name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(
          value
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
        )
    );
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    let piece: Piece = {
      part: this.partCtrl.value,
      agrupacion: this.agrupacionCtrl.value,
      lyrics: this.lyricsCtrl.value,
    };

    this.piecesService
      .createPiece(piece)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((res) => {
        this.lyricsCtrl.reset();
        this.partCtrl.reset();
      });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}

export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl, form: NgForm | FormGroupDirective | null) {
    return control && control.invalid && control.touched;
  }
}
