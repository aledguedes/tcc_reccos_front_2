import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueHeadComponent } from './league-head/league-head.component';

const routes: Routes = [
  { path: '', component: LeagueHeadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueRoutingModule { }
