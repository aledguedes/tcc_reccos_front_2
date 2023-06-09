import { TeamInitComponent } from './../pages/modules/team/components/team-init/team-init.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default.component';
import { LeagueInitComponent } from './../pages/modules/league/components/league-init/league-init.component';
import { TeamHeadComponent } from './../pages/modules/team/components/team-head/team-head.component';
import { LeagueHeadComponent } from '../pages/modules/league/components/league-head/league-head.component';

const routes: Routes = [
  {
    path: '', component: DefaultComponent, children: [
      { path: '', component: LeagueInitComponent },
      { path:'teams', component: TeamInitComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
