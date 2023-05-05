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

@Component({
  selector: 'app-agrupaciones',
  templateUrl: './agrupaciones.component.html',
  styleUrls: ['./agrupaciones.component.scss'],
})
export class AgrupacionesComponent implements OnInit {
  @Input() autoresList: Autor[] = [];

  autoresMultiCtrl: FormControl = new FormControl('', [Validators.required]);
  filteredAutores: Autor[];
  autoresSelect: FormControl = new FormControl();
  nameCtrl: FormControl = new FormControl('', [Validators.required]);
  modalidadCtrl: FormControl = new FormControl('', [Validators.required]);
  yearCtrl: FormControl = new FormControl('', [Validators.required]);

  form: FormGroup = new FormGroup({});

  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;

  protected _onDestroy = new Subject();

  constructor(private agrupacionesService: AgrupacionesService) {
    this.form.setControl('autores', this.autoresMultiCtrl);
    this.form.setControl('agrupacion', this.nameCtrl);
    this.form.setControl('modalidad', this.modalidadCtrl);
    this.form.setControl('year', this.yearCtrl);
  }

  ngOnInit() {
    this.filteredAutores = this.autoresList;

    this.autoresSelect.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe((value) => {
      this.filterWebsiteMulti(value);
    });
  }

  filterWebsiteMulti(value: string) {
    this.filteredAutores = this.autoresList.filter(
      (autor) =>
        autor.apodo?.toLowerCase().includes(value.toLowerCase()) ||
        autor.name.toLowerCase().includes(value.toLowerCase())
    );
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    let agrupacion: Agrupacion;
    agrupacion = {
      name: this.nameCtrl.value,
      autores: this.autoresMultiCtrl.value,
      modalidad: this.modalidadCtrl.value,
      year: this.yearCtrl.value,
    };
    console.log(agrupacion);

    // this.agrupacionesService.createAgrupacion(agrupacion).subscribe((res) => {
    //   console.log(res);
    // });
  }

  ngOnDestroy() {
    this._onDestroy.next(true);
    this._onDestroy.complete();
  }
}
