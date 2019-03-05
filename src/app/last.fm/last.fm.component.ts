import { Component, OnInit } from '@angular/core';
import { LastFmService } from './last.fm.service';
import { Observable } from 'rxjs';
import { LastFmTrack } from './interfaces';

@Component({
  selector: 'app-last-fm',
  templateUrl: './last.fm.component.html',
  styleUrls: ['./last.fm.component.scss']
})
export class LastFmComponent implements OnInit {
  recentTracks$: Observable<LastFmTrack[]>;

  constructor(private lastFmService: LastFmService) {}
  ngOnInit(): void {
    this.recentTracks$ = this.lastFmService.recentTracks$;
    this.lastFmService.init();
  }
}
