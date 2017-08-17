import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryListComponent } from "./entry/list/entry-list/entry-list.component";
import { CreateEditEntryComponent } from './entry/single/create-edit-entry/create-edit-entry.component';
import { DebugComponent } from './debug/debug.component';
import { EntryNotOwnerActivator } from "./navbar/guards/EntryNotOwnerActivator";
import { LoggedInActivator } from "./navbar/guards/LoggedInActivator";
import { TeamRouteActivator } from "./navbar/guards/TeamRouteActivator";

const routes: Routes = [
  {
    path: '',
    children: []
  },
  { path: 'entries',      component: EntryListComponent },
  { path: 'createEntry',  component: CreateEditEntryComponent },
  { path: 'viewEntry/:id',     component: CreateEditEntryComponent,canActivate: [EntryNotOwnerActivator,LoggedInActivator,TeamRouteActivator]},  
  { path: 'debug',        component: DebugComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
