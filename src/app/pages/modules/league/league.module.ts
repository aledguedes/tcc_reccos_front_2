import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueRoutingModule } from './league-routing.module';
import { LeagueHeadComponent } from './league-head/league-head.component';
import { MaterialModule } from 'src/app/shared/material.module';


@NgModule({
  declarations: [
    LeagueHeadComponent
  ],
  imports: [
    CommonModule,
    LeagueRoutingModule,
    MaterialModule
  ]
})
export class LeagueModule { }
