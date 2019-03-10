import { Component, OnInit } from '@angular/core';
import { LastFmService } from './last.fm.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LastFmTrack } from './interfaces';

@Component({
  selector: 'app-last-fm',
  templateUrl: './last.fm.component.html',
  styleUrls: ['./last.fm.component.scss']
})
export class LastFmComponent implements OnInit {
  recentTracks$: Observable<LastFmTrack[]>;
  recentlyPlayedTracks$: Observable<LastFmTrack[]>;
  latestTrack$: Observable<LastFmTrack>;
  isNowPlaying$: Observable<boolean>;
  expandRecent = false;

  constructor(private lastFmService: LastFmService) {}
  ngOnInit(): void {
    this.recentTracks$ = this.lastFmService.recentTracks$;
    this.recentlyPlayedTracks$ = this.recentTracks$.pipe(
      map(tracks => tracks.filter((_, i) => i > 0))
    );
    this.latestTrack$ = this.recentTracks$.pipe(
      map(tracks => tracks ? tracks[0] : null)
    );
    this.isNowPlaying$ = this.latestTrack$.pipe(
      map(track => track['@attr'] ? track['@attr'].nowplaying === 'true' : false)
    );
    this.lastFmService.init();
  }
}
