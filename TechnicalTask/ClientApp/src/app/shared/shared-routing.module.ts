import { user_routes } from '../routes/user-layout-routes';
import { UserLayoutComponent } from './../layouts/user-layout/user-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
