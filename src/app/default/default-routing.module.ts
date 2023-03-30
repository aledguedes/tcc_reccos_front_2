import { TeamHeadComponent } from './../pages/modules/team/components/team-head/team-head.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueHeadComponent } from '../pages/modules/league/league-head/league-head.component';
import { DefaultComponent } from './default.component';

const routes: Routes = [
  {
    path: '', component: DefaultComponent, children: [
      { path: '', component: LeagueHeadComponent },
      { path: '/teams', component: TeamHeadComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
