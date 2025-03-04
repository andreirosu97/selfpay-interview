import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectionListComponent } from "./components/selection-list/selection-list.component";
import { LocationsListComponent } from "./components/locations-list/locations-list.component";

@NgModule({
  declarations: [
    AppComponent,
    SelectionListComponent,
    LocationsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
