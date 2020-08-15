import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  declarations: [
    DashboardModule
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports : [
    DashboardModule,
    
  ]
})
export class DashboardModule { }
