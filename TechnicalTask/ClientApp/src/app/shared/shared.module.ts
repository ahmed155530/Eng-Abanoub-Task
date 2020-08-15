import { UserFooterComponent } from './user-footer/user-footer.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  declarations: [
    AdminHeaderComponent ,
    UserHeaderComponent ,
    AdminSidebarComponent ,
    UserFooterComponent ,
  ],
  exports : [
    AdminHeaderComponent ,
    UserHeaderComponent ,
    AdminSidebarComponent ,
    UserFooterComponent ,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule ,
  ]
})
export class SharedModule { }
