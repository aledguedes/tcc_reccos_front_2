import { NavbarModule } from './../../../shared/components/navbar/navbar.module';
import { SidebarModule } from './../../../shared/components/sidebar/sidebar.module';
import { MaterialModule } from './../../../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamHeadComponent } from './components/team-head/team-head.component';


@NgModule({
  declarations: [
    TeamHeadComponent,
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    MaterialModule,
    SidebarModule,
    NavbarModule,
  ]
})
export class TeamModule { }
