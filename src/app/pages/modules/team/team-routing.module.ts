import { TeamInitComponent } from './components/team-init/team-init.component';
import { TeamHeadComponent } from './components/team-head/team-head.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from 'src/app/default/default.component';

const routes: Routes = [
  {
    path: '', component: DefaultComponent, children: [
      { path: '', component: TeamHeadComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
