import { Routes, RouterModule } from '@angular/router';

export const admin_routes: Routes = [
  {
    path:'dashboard',
    loadChildren : ()=> import('../dashboard/dashboard.module').then(m=>m.DashboardModule)
   },
];
