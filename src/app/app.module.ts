import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EntryService } from './data-services/entry.service'
import { RefDataService } from "./data-services/ref-data.service";
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DownsmanAppComponent } from './downsman-app/downsman-app.component';
import { UserService } from "./data-services/user.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntryListComponent } from './entry/list/entry-list/entry-list.component';
import { EntryComponent } from './entry/single/entry/entry.component';
import { CreateEditEntryComponent } from './entry/single/create-edit-entry/create-edit-entry.component';
import { DebugComponent } from './debug/debug.component';
import { EntryThumbnailComponent } from './entry/list/entry-thumbnail/entry-thumbnail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { TeamRouteActivator } from "./navbar/guards/TeamRouteActivator";
import { LoggedInActivator } from "./navbar/guards/LoggedInActivator";
import { EntryNotOwnerActivator } from "./navbar/guards/EntryNotOwnerActivator";
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    NavbarComponent,
    DownsmanAppComponent,
    EntryListComponent,
    EntryComponent,
    CreateEditEntryComponent,
    DebugComponent,
    EntryThumbnailComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    RefDataService,
    EntryService,
    TeamRouteActivator,
    LoggedInActivator,
    EntryNotOwnerActivator,],
  bootstrap: [DownsmanAppComponent]
})
export class AppModule { }
