import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LastFmModule } from './last.fm/last.fm.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LastFmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
