import { Routes, RouterModule } from '@angular/router';

export const user_routes: Routes = [
  {
    path:'',
    loadChildren : ()=> import('../cms/cms.module').then(m=>m.CmsModule)
   },
];


