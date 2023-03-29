import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-forgot',
  templateUrl: './login-forgot.component.html',
  styleUrls: ['./login-forgot.component.scss']
})
export class LoginForgotComponent implements OnInit {

  login!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
