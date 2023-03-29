import { LoginUserComponent } from './components/login-user/login-user.component';
import { LoginHeadComponent } from './components/login-head/login-head.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginHeadComponent, children: [
    { path: '', component: LoginUserComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
