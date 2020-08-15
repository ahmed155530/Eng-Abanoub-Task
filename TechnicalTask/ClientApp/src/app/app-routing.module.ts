import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { user_routes } from './routes/user-layout-routes';
import { admin_routes } from './routes/admin-layout-routes';
const routes: Routes =
[
  {
    path : '' , component : UserLayoutComponent , children : user_routes
  },
  {
    path : 'administration' , component : AdminLayoutComponent , children : admin_routes
  }
];
@NgModule
(
  {
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  }
)
export class AppRoutingModule {}
