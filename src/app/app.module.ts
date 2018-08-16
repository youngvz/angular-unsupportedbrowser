import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnsupportedBrowsersComponent } from './unsupported-browsers/unsupported-browsers.component';

@NgModule({
  declarations: [
    AppComponent,
    UnsupportedBrowsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
