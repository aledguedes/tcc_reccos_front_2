import { LoginUserComponent } from './components/login-user/login-user.component';
import { LoginHeadComponent } from './components/login-head/login-head.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [
    LoginHeadComponent,
    LoginUserComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
