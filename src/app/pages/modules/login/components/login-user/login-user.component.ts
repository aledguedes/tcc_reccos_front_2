import { LoginService } from './../../../../../shared/services/login/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SnackService } from 'src/app/shared/services/snack/snack.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  login!: FormGroup;
  hide: boolean = true;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private snack: SnackService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  authLogin(user: any) {
    this.loginService.autenticatedUser(user).subscribe({
      next: (data: any) => {
        this.loginService.sucessLogin(data.token);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log('ERR LOGIN', err);
        // this.toastr.error('Credenciais inválidas!', 'Toastr fun!');
        this.snack.snack('Credenciais inválidas!', 'error');
      }
    });
  }

  get loginRequest() {
    return this.login.controls;
  }

}
