import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatDialogModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faTwitterSquare, faInstagram, faLinkedin, faGithubSquare, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { LastFmModule } from './last.fm/last.fm.module';
import { ProjectsComponent, YoutubeViewerDialogComponent } from './projects/projects.component';

const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatDialogModule
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    YoutubeViewerDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    LastFmModule,
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [YoutubeViewerDialogComponent]
})
export class AppModule {
  constructor() {
    library.add(faFacebookSquare, faTwitterSquare, faInstagram, faLinkedin, faEnvelopeSquare, faGithubSquare, faGitlab);
  }
}
