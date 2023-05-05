import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaborateComponent } from './collaborate.component';
import { AgrupacionesComponent } from './agrupaciones/agrupaciones.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PiecesComponent } from './pieces/pieces.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [CollaborateComponent, AgrupacionesComponent, PiecesComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    NgxMatSelectSearchModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [CollaborateComponent],
})
export class CollaborateModule {}
