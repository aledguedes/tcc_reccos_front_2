import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueHeadComponent } from './components/league-head/league-head.component';
import { LeagueInitComponent } from './components/league-init/league-init.component';

const routes: Routes = [
  { path: '', component: LeagueInitComponent, children: [
      { path: '', component: LeagueHeadComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueRoutingModule { }
