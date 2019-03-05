import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LastFmComponent } from './last.fm.component';
import { LastFmService } from './last.fm.service';

@NgModule({
  declarations: [
    LastFmComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [LastFmComponent],
  providers: [LastFmService],
})
export class LastFmModule { }
