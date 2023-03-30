import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultModule } from './../../../default/default.module';
import { MaterialModule } from './../../../shared/material.module';

import { TeamRoutingModule } from './team-routing.module';
import { TeamHeadComponent } from './components/team-head/team-head.component';
import { TeamInitComponent } from './components/team-init/team-init.component';


@NgModule({
  declarations: [
    TeamHeadComponent,
    TeamInitComponent,
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    MaterialModule,
    DefaultModule
  ]
})
export class TeamModule { }
