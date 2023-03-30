import { DefaultModule } from './../../../default/default.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueRoutingModule } from './league-routing.module';
import { LeagueHeadComponent } from './components/league-head/league-head.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { LeagueInitComponent } from './components/league-init/league-init.component';


@NgModule({
  declarations: [
    LeagueHeadComponent,
    LeagueInitComponent
  ],
  imports: [
    CommonModule,
    LeagueRoutingModule,
    MaterialModule,
    DefaultModule
  ]
})
export class LeagueModule { }
