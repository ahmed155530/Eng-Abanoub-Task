import { RegisterComponent } from './../Authentication/register/register.component';
import { HomePageComponent } from './homePage/homePage.component';
import { LoginComponent } from './../Authentication/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'', component : HomePageComponent
  },
  {
    path:'login' , component : LoginComponent
  },
  {
    path:'register', component : RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
