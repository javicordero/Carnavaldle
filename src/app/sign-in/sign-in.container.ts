import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.container.html',
  styleUrls: ['./sign-in.container.scss'],
})
export class SignInContainer {
  // nameCtrl: FormControl = new FormControl('', [Validators.required]);

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  // Services
  private readonly usersService = inject(UsersService);
  private readonly alertifyService = inject(AlertifyService);
  private readonly router = inject(Router);

  // Form
  form: FormGroup = new FormGroup({});
  usernameCtrl: FormControl = new FormControl('', [Validators.required]);
  passwordCtrl: FormControl = new FormControl('', [Validators.required]);

  constructor() {
    this.form.setControl('username', this.usernameCtrl);
    this.form.setControl('password1', this.passwordCtrl);
  }

  submit() {
    const user: User = {
      username: this.usernameCtrl.value,
      password: this.passwordCtrl.value,
    };
    this.usersService.signIn(user).subscribe({
      next: (data) => {
        // this.form.reset();
        // sessionStorage.setItem('user', JSON.stringify(data));
        this.alertifyService.success('Sesión iniciada');
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.alertifyService.error(err.error);
      },
    });
  }
}
