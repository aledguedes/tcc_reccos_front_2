import { MaterialModule } from './../../../shared/material.module';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { LoginHeadComponent } from './components/login-head/login-head.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginForgotComponent } from './components/login-forgot/login-forgot.component';


@NgModule({
  declarations: [
    LoginHeadComponent,
    LoginUserComponent,
    LoginForgotComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule
  ]
})
export class LoginModule { }
