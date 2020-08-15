import { HomePageComponent } from './homePage/homePage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';


@NgModule({
  declarations: [
    HomePageComponent,
    CmsRoutingModule ,
  ],
  exports:[
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    CmsRoutingModule ,
    HomePageComponent,
  ]
})
export class CmsModule { }
