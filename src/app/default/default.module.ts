import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { NavbarModule } from '../shared/components/navbar/navbar.module';
import { SidebarModule } from '../shared/components/sidebar/sidebar.module';


@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    NavbarModule,
    SidebarModule,
    MaterialModule
  ]
})
export class DefaultModule { }
