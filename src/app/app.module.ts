import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule, } from '@angular/material';


import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DownsmanAppComponent } from './downsman-app/downsman-app.component';
import { UserService } from "./data-service/user.service";
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    NavbarComponent,
    DownsmanAppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
  ],
  providers: [UserService],
  bootstrap: [DownsmanAppComponent]
})
export class AppModule { }
