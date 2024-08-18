import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInContainer } from './sign-in.container';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [SignInContainer],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule,
    RouterModule,
  ],
  exports: [SignInContainer],
})
export class SignInModule {}
