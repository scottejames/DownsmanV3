import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DownsmanAppComponent } from './downsman-app/downsman-app.component';
import { UserService } from "./data-service/user.service";

@NgModule({
  declarations: [
    NavbarComponent,
    DownsmanAppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [DownsmanAppComponent]
})
export class AppModule { }
