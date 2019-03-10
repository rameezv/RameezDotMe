import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LastFmTrack } from './interfaces';

@Injectable()
export class LastFmService {
  API_KEY = '27faee170fc87214923dfa18ea3624fc'; // TODO: secret this
  RECENT_TRACKS_URL =
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=bigtreeworld&api_key=${this.API_KEY}&format=json&limit=10`;

  recentTracks$$: BehaviorSubject<LastFmTrack[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {}

  init(): void {
    this.getRecentTracks();
    // Check every 20 seconds
    window.setInterval(this.getRecentTracks.bind(this), 20000);
  }

  getRecentTracks(): void {
    this.http.get(this.RECENT_TRACKS_URL).subscribe((response: {recenttracks: {track: LastFmTrack[]}}) => {
      this.recentTracks$$.next(response.recenttracks.track);
    });
  }

  get recentTracks$(): Observable<LastFmTrack[]> {
    return this.recentTracks$$.asObservable();
  }
}
