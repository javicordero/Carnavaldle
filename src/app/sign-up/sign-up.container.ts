import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { ReplaySubject } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.container.html',
  styleUrls: ['./sign-up.container.scss'],
})
export class SignUpContainer {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  // Services
  private readonly usersService = inject(UsersService);
  private readonly alertifyService = inject(AlertifyService);
  private readonly router = inject(Router);

  // Form
  form: FormGroup = new FormGroup({});
  usernameCtrl: FormControl = new FormControl('', [Validators.required]);
  password1Ctrl: FormControl = new FormControl('', [Validators.required]);
  password2Ctrl: FormControl = new FormControl('', [Validators.required]);

  constructor() {
    this.form.setControl('username', this.usernameCtrl);
    this.form.setControl('password1', this.password1Ctrl);
    this.form.setControl('password2', this.password2Ctrl);
  }

  submit() {
    // console.log(this.password1Ctrl, this.password2Ctrl);
    if (this.password1Ctrl.value != this.password2Ctrl.value) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const user: User = {
      username: this.usernameCtrl.value,
      password: this.password1Ctrl.value,
    };
    this.usersService.signUp(user).subscribe({
      next: (data) => {
        // this.form.reset();
        this.alertifyService.success('Sesión iniciada');
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.alertifyService.error(err.error);
      },
    });
  }
}
