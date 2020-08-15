import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HomePageComponent } from './cms/homePage/homePage.component';
import { user_routes } from './routes/user-layout-routes';
import { CmsModule } from './cms/cms.module';
import { CmsRoutingModule } from './cms/cms-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './Authentication/register/register.component';
import { LoginComponent } from './Authentication/login/login.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CounterComponent,
    FetchDataComponent,
    UserLayoutComponent ,
    AdminLayoutComponent ,
    SharedModule ,
    CmsRoutingModule ,
    CmsModule ,


  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    //BrowserModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    // RouterModule.forRoot([
    //   { path: '', component: HomePageComponent, pathMatch: 'full' },
    //   { path: 'counter', component: CounterComponent },
    //   { path: 'fetch-data', component: FetchDataComponent },
    // ]),
    RouterModule.forRoot([
      { path : '' , component : CmsModule, pathMatch:'full'},
      { path: 'dashboard' , component:DashboardComponent}
    ]),
    RouterModule,
    BrowserAnimationsModule ,
    AppRoutingModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
