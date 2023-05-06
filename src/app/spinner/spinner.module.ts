import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerComponent } from './spinner.component';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule, NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })],
  exports: [SpinnerComponent],
})
export class SpinnerModule {}
