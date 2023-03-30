import { TeamInitComponent } from './components/team-init/team-init.component';
import { TeamHeadComponent } from './components/team-head/team-head.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'teams', component: TeamInitComponent, children: [
      { path: '', component: TeamHeadComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
