import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagram, faLinkedin, faGithubSquare, faGitlab, faSpotify, faYoutubeSquare, faApple } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { LastFmScrobblesModule } from 'angular-last-fm-scrobbles';

import { AppComponent } from './app.component';
import { ProjectsComponent, YoutubeViewerDialogComponent } from './projects/projects.component';
import { ArtComponent, ArtDialogComponent } from './art/art.component';
import { MusicComponent } from './music/music.component';

const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatTooltipModule
];

@NgModule({
    declarations: [
        AppComponent,
        ProjectsComponent,
        ArtDialogComponent,
        YoutubeViewerDialogComponent,
        MusicComponent,
        ArtComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
        LastFmScrobblesModule,
        ...materialModules
    ],
    entryComponents: [ArtDialogComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebookSquare, faTwitterSquare, faInstagram, faLinkedin, faEnvelopeSquare, faGithubSquare, faGitlab, faSpotify, faYoutubeSquare, faApple);
  }
}
