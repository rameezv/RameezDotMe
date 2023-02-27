import { Component, Inject } from '@angular/core';

enum Source {
  SPOTIFY,
  YOUTUBE,
};

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent {
  lastFmApiKey = '27faee170fc87214923dfa18ea3624fc';
  sourceEnum = Source;
  playlists = [{
    name: 'Eternals',
    image: 'eternals.jpg',
    links: [
      {
        source: Source.SPOTIFY,
        url: 'https://open.spotify.com/playlist/6TIgaUP8RANUKZb6EuEbAC?si=b0dedcec49644af1',
      },
    ],
  }];
  constructor() {}
}

