import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    loadChildren: () => import('./pages/modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./default/default.module').then(m => m.DefaultModule)
  },
  {
    path: 'league',
    loadChildren: () => import ('./pages/modules/league/league.module').then(m => m.LeagueModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./pages/modules/team/team.module').then(m => m.TeamModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
