import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { LocationSelectorComponent } from './components/location-selector/location-selector.component';

@NgModule({
  declarations: [AppComponent, ListViewComponent, LocationSelectorComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
