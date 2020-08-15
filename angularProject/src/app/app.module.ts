import { AuthenticationService } from './services/authentication.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material/angular-material.module';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HttpErrorHandler } from './services/http-error-handler.service';
// import { MessageService } from './services/message.service';
// import { MessageComponent } from './message/message.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    //MessageComponent,
    DefaultLayoutComponent,
    BackendLayoutComponent ,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    AngularMaterialModule ,
    ReactiveFormsModule ,


  ],
  providers: [
    // HttpErrorHandler,
    // MessageService ,
    AuthenticationService ,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
