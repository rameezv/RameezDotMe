import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatRippleModule, MatIconModule } from '@angular/material';
import { LastFmComponent } from './last.fm.component';
import { LastFmService } from './last.fm.service';
import { EqComponent } from './equalizer.component';

@NgModule({
  declarations: [
    LastFmComponent,
    EqComponent
  ],
  imports: [
    MatRippleModule,
    MatIconModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [LastFmComponent],
  providers: [LastFmService],
})
export class LastFmModule { }
