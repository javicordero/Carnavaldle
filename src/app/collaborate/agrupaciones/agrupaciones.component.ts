import {
  Component,
  Input,
  OnInit,
  ViewChild,
  AfterContentChecked,
  AfterViewInit,
  AfterContentInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatSelect } from '@angular/material/select';
import { ReplaySubject, Subject, takeUntil, take } from 'rxjs';
import { Agrupacion } from 'src/app/models/agrupacion.model';
import { Autor } from 'src/app/models/autor.model';
import { AgrupacionesService } from 'src/app/services/agrupaciones.service';
import { CustomErrorStateMatcher } from '../pieces/pieces.component';

@Component({
  selector: 'app-agrupaciones',
  templateUrl: './agrupaciones.component.html',
  styleUrls: ['./agrupaciones.component.scss'],
})
export class AgrupacionesComponent implements OnInit {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  @Input() autoresList: Autor[] = [];

  // Autores multi select
  filteredAutores: Autor[];
  autoresSelect: FormControl = new FormControl();

  // Form
  form: FormGroup = new FormGroup({});
  autoresCtrl: FormControl = new FormControl('', [Validators.required]);
  nameCtrl: FormControl = new FormControl('', [Validators.required]);
  modalidadCtrl: FormControl = new FormControl('', [Validators.required]);
  yearCtrl: FormControl = new FormControl('', [Validators.required]);
  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;
  formControlErrorMatcher = new CustomErrorStateMatcher();

  constructor(private agrupacionesService: AgrupacionesService) {
    this.form.setControl('autores', this.autoresCtrl);
    this.form.setControl('agrupacion', this.nameCtrl);
    this.form.setControl('modalidad', this.modalidadCtrl);
    this.form.setControl('year', this.yearCtrl);
  }

  ngOnInit() {
    this.filteredAutores = this.autoresList;

    this.autoresSelect.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe((value) => {
      this.filterAutoresMulti(value);
    });
  }

  filterAutoresMulti(value: string) {
    this.filteredAutores = this.autoresList.filter(
      (autor) =>
        autor.apodo
          ?.toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .includes(value.toLowerCase()) ||
        autor.name
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .includes(value.toLowerCase())
    );
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    let agrupacion: Agrupacion;
    agrupacion = {
      name: this.nameCtrl.value,
      autores: this.autoresCtrl.value,
      modalidad: this.modalidadCtrl.value,
      year: this.yearCtrl.value,
    };

    this.agrupacionesService
      .createAgrupacion(agrupacion)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((res) => {
        this.form.reset();
      });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
