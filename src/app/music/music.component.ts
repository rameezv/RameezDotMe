import { Component, Inject } from '@angular/core';

enum Source {
  SPOTIFY,
  YOUTUBE,
  APPLE,
};

interface Playlist {
  name: string;
  description: string;
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
    description: 'My All-Time Favourite Tracks, across all genres',
    links: [
      {
        source: Source.SPOTIFY,
        url: 'https://open.spotify.com/playlist/6TIgaUP8RANUKZb6EuEbAC?si=b0dedcec49644af1',
      },
      {
        source: Source.YOUTUBE,
        url: 'https://www.youtube.com/playlist?list=PL1gAn00oLKEOL3Mh4-hak_FtFtoH5l2Pv',
      },
      {
        source: Source.APPLE,
        url: 'https://music.apple.com/ca/playlist/eternals/pl.u-kv9l2BmF7kzgPq3',
      },
    ],
  },
  {
    name: 'The Hip-Hop Collection',
    description: 'Rap and Hip-Hop music that hits hard',
    links: [
      {
        source: Source.SPOTIFY,
        url: 'https://open.spotify.com/playlist/3J1QQTd5EssfGey5QntaBm?si=3118f3e755994193',
      },
      {
        source: Source.APPLE,
        url: 'https://music.apple.com/ca/playlist/the-hip-hop-collection/pl.u-gxblgJ7C5LYqmVR',
      },
    ],
  },
  {
    name: 'The R&B & Reggae Collection',
    description: 'Music that brings out the smooth in all of us',
    links: [
      {
        source: Source.SPOTIFY,
        url: 'https://open.spotify.com/playlist/7svU1ezGJeDqig6DYMfzbB?si=7348706bb6654295',
      },
      {
        source: Source.APPLE,
        url: 'https://music.apple.com/ca/playlist/the-r-b-reggae-collection/pl.u-KVXBkXVCZk485Me',
      },
    ],
  },
  {
    name: 'The Jazz and Soul Collection',
    description: 'Jazz music that speaks from the heart',
    links: [
      {
        source: Source.SPOTIFY,
        url: 'https://open.spotify.com/playlist/4BWjQhg8aCc4KvNILri5fj?si=8c61efd351be438c',
      },
      {
        source: Source.APPLE,
        url: 'https://music.apple.com/ca/playlist/the-jazz-and-soul-collection/pl.u-2aoq8ybtN1RKrBb',
      },
    ],
  },
  {
    name: 'The Mineral Collection',
    description: 'Rock out with your sock out!',
    links: [
      {
        source: Source.SPOTIFY,
        url: 'https://open.spotify.com/playlist/3X5FFAnR2XW2hJubx47EIx?si=29f929b2e7ac4c33',
      },
      {
        source: Source.APPLE,
        url: 'https://music.apple.com/ca/playlist/the-mineral-collection/pl.u-kv9l2aaI7kzgPq3',
      },
    ],
  },
  {
    name: 'The Classic Collection',
    description: 'Old is gold, music from before I was born',
    links: [
      {
        source: Source.SPOTIFY,
        url: 'https://open.spotify.com/playlist/012NAo5qCEFi3snpGOaElw?si=a13d991d3bc74fe1',
      },
      {
        source: Source.APPLE,
        url: 'https://music.apple.com/ca/playlist/the-classic-collection/pl.u-xlyNE3Vsk1xYzR7',
      },
    ],
  },
  {
    name: 'The EDM Collection',
    description: 'Electronic music to dance to',
    links: [
      {
        source: Source.SPOTIFY,
        url: 'https://open.spotify.com/playlist/2jayWXdbaFsWZL5v0ftnMZ?si=b27fcfc7a5904f2a',
      },
      {
        source: Source.APPLE,
        url: 'https://music.apple.com/ca/playlist/the-edm-collection/pl.u-xlyNEmNsk1xYzR7',
      },
    ],
  },
  {
    name: 'The Chillectric Collection',
    description: 'Chill electronic music',
    links: [
      {
        source: Source.SPOTIFY,
        url: 'https://open.spotify.com/playlist/3SulUEqrXVulAG0pusqmJ7?si=e20748c225e14c6f',
      },
      {
        source: Source.APPLE,
        url: 'https://music.apple.com/ca/playlist/the-chillectric-collection/pl.u-KVXBkPLtZk485Me',
      },
    ],
  },
  {
    name: 'Tandoori Tunes',
    description: 'All my favourite Hindi/Urdu music "angeethi sangeethi"',
    links: [
      {
        source: Source.SPOTIFY,
        url: 'https://open.spotify.com/playlist/7810pCrQSNfd6AhxdHOVuw?si=7482f1e203c9457a',
      },
      {
        source: Source.APPLE,
        url: '',
      },
    ],
  },
  {
    name: 'Party In My Pants',
    description: 'Everyone\'s invited!',
    links: [
      {
        source: Source.SPOTIFY,
        url: 'https://open.spotify.com/playlist/3UXxCZ52GV2fk3QzfnZFE8?si=f5474be5dc0b482d',
      },
      {
        source: Source.APPLE,
        url: 'https://music.apple.com/ca/playlist/tandoori-tunes/pl.u-8aAVXd6Cogl8xRe',
      },
    ],
  },
  {
    name: 'Shortcut to Mushrooms',
    description: 'Peaceful, beautiful music',
    links: [
      {
        source: Source.SPOTIFY,
        url: 'https://open.spotify.com/playlist/5r1cuSZZPsEOFF7Kun9Jbu?si=f86576eccfcb4785',
      },
      {
        source: Source.APPLE,
        url: 'https://music.apple.com/ca/playlist/shortcut-to-mushrooms/pl.u-WabZv4AcdjJb63k',
      },
    ],
  },
  {
    name: 'World Language Tour',
    description: 'Music in languages I have yet to learn',
    links: [
      {
        source: Source.SPOTIFY,
        url: 'https://open.spotify.com/playlist/5Cha8j9aoXB7rwBvw9ZJww?si=d0510f63fc604993',
      },
      {
        source: Source.APPLE,
        url: 'https://music.apple.com/ca/playlist/world-language-tour/pl.u-KVXBk1GIZk485Me',
      },
    ],
  },
  {
    name: 'The Good S**t Compendium',
    description: 'All of my music in one giant playlist',
    links: [
      {
        source: Source.SPOTIFY,
        url: 'https://open.spotify.com/playlist/2cinh5jEpl4oPiJah2nEJS?si=3853e6e0e13344b4',
      },
      {
        source: Source.YOUTUBE,
        url: 'https://www.youtube.com/playlist?list=PL1gAn00oLKEN5BTOOtAIU27UQ6phDiStP',
      },
      {
        source: Source.APPLE,
        url: 'https://music.apple.com/ca/playlist/the-good-shit-compendium/pl.u-oZylD0aFRMbzYEy',
      },
    ],
  }];

  playlistsExpanded = false;

  constructor() {}

  togglePlaylistsExpanded() {
    this.playlistsExpanded = !this.playlistsExpanded;
  }
}

