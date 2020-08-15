import { RegisterComponent } from './register/register.component';
import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { HomeComponent } from './home/home.component';
// import { MatSliderModule } from '@angular/material/slider';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
// import { MatInputModule } from '@angular/material/input';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatTableModule } from '@angular/material/table';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    HomeComponent ,
    SigninComponent,
    RegisterComponent,
    // MatToolbarModule,
    // MatButtonModule,
    // MatCardModule,
    // MatInputModule,
    // MatDialogModule,
    // MatTableModule,
    // MatMenuModule,
    // MatIconModule,
    // MatProgressSpinnerModule
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    AngularMaterialModule,
  ],
  exports:[
    HomeComponent
  ]
})
export class CmsModule { }
