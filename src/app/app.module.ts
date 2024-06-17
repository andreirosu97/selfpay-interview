import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectionViewComponent } from "./components/selection-view/selection-view.component";
import { LocationSelectorComponent } from "./components/location-selector/location-selector.component";

@NgModule({
  declarations: [
    AppComponent,
    SelectionViewComponent,
    LocationSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
