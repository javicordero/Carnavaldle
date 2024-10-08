import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Agrupacion } from 'src/app/models/agrupacion.model';

@Component({
  selector: 'app-guessbox',
  templateUrl: './guessbox.component.html',
  styleUrls: ['./guessbox.component.scss'],
})
export class GuessboxComponent {
  @Input() gameStarted: boolean = false;

  @ViewChild('autocomplete') autocomplete: any;

  @Input() agrupacionList!: Agrupacion[];
  agrupacionSelected?: Agrupacion;

  @Output() selectAgrupacionEvent: EventEmitter<Agrupacion> = new EventEmitter();

  selectEvent(agrupacion: Agrupacion) {
    this.agrupacionSelected = agrupacion;
  }

  sendAgrupacion() {
    if (this.agrupacionSelected !== undefined)
      this.selectAgrupacionEvent.emit(this.agrupacionSelected);
    this.autocomplete.clear();
  }

  onChangeSearch(val: string) {
    if (val !== '') {
      this.showPanel();
    } else {
      this.hidePanel();
    }
    this.clearAgrupacionSelected();
  }

  onFocused(e: any) {
    let input = document.querySelector('.input-container')?.children[0] as HTMLInputElement;
    if (input.value === '') {
      this.hidePanel();
    }
  }

  onCleared(e: any) {
    this.hidePanel();
    this.clearAgrupacionSelected();
  }

  clearAgrupacionSelected() {
    this.agrupacionSelected = undefined;
  }

  hidePanel() {
    let pannel = document.getElementById('suggestions');
    pannel?.classList.add('force-hidden');
    let notfount = document.querySelector('.not-found');
    notfount?.classList.add('force-hidden');
  }

  showPanel() {
    let pannel = document.getElementById('suggestions');
    pannel?.classList.remove('force-hidden');
    let notfount = document.querySelector('.not-found');
    notfount?.classList.remove('force-hidden');
  }

  customFilter(agrupaciones: Agrupacion[], value: string): Agrupacion[] {
    return agrupaciones.filter((agrupacion) =>
      agrupacion.name
        ?.toLowerCase()
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
}
