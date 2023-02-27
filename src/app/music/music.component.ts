import { Component, Inject } from '@angular/core';

enum Source {
  SPOTIFY,
  YOUTUBE,
};

interface Playlist {
  name: string;
  description: string;
  image: string;
  links: Array<{source: Source, url: string}>;
}

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent {
  lastFmApiKey = '27faee170fc87214923dfa18ea3624fc';
  sourceEnum = Source;
  playlists: Playlist[] = [{
    name: 'Eternals',
    image: 'eternals.jpg',
    description: 'My All-Time Favourite Tracks',
    links: [
      {
        source: Source.SPOTIFY,
        url: 'https://open.spotify.com/playlist/6TIgaUP8RANUKZb6EuEbAC?si=b0dedcec49644af1',
      },
      {
        source: Source.YOUTUBE,
        url: 'https://www.youtube.com/playlist?list=PL1gAn00oLKEOL3Mh4-hak_FtFtoH5l2Pv',
      },
    ],
  }];
  constructor() {}
}

