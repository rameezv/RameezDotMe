import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor(public dialog: MatDialog) {}
  projects: Project[] = [
    {
      name: 'Big Tree World',
      description: `
        When I was 13, I founded Big Tree World, an award-winning company dedicated to providing users
        with free software, coding/design tutorials, and web design. Big Tree World offers free web and
        graphic design for non-profit and charity organizations.
      `,
      color1: '#2e7d32',
      color2: '#9ccc65',
      buttons: [{
        textOrIcon: 'Visit',
        action: () => {
          window.open('http://bigtreeworld.com', '_blank');
        },
        isIconButton: false,
      }],
    },
    {
      name: 'TEDxYYC',
      description: `
        Computer science teaches a problem-solving paradigm that can be very useful for finding innovative
        solutions to everyday challenges. Based on my own experience of inventing the world's first
        non-invasive flu vaccine, I show you how I used computer science to identify a problem, tailor
        a solution to those who needed it most, and recognize when I needed to think out-of-the-box.
      `,
      color1: '#aa0000',
      color2: '#d500f9',
      buttons: [{
        textOrIcon: 'play_circle_filled',
        action: () => {
          this.dialog.open(YoutubeViewerDialogComponent, {
            minWidth: '80%',
            minHeight: '80%',
            height: '80%',
            panelClass: 'dark-panel',
            data: {url: 'https://www.youtube.com/embed/LJFi3hLG8gw'}
          });
        },
        isIconButton: true,
      }]
    },
    {
      name: 'We Day Alberta',
      description: `
      On October 27, 2015 16,000 young standout world-changers gathered together to talk about
      important issues, celebrate our collective impact, and inspire one another to keep building
      a better world! Watch me explain how anyone has the capacity to make a change simply by
      challenging their assumptions.
      `,
      color1: '#0091ea',
      color2: '#43a047',
      buttons: [{
        textOrIcon: 'play_circle_filled',
        action: () => {
          this.dialog.open(YoutubeViewerDialogComponent, {
            minWidth: '80%',
            minHeight: '80%',
            height: '80%',
            panelClass: 'dark-panel',
            data: {url: 'https://www.youtube.com/embed/_tGAvRE_2ow'}
          });
        },
        isIconButton: true,
      }]
    },
  ];
}

@Component({
  selector: 'app-youtube-viewer',
  template: `
  <iframe width="100%" height="100%" [src]="url" frameborder="0" scrolling="no"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `,
  styles: [
    `iframe {
      overflow: hidden;
    }`
  ]
})
export class YoutubeViewerDialogComponent {
  url: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<YoutubeViewerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {url: string}) {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(data.url);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

interface Project {
  name: string;
  description: string;
  color1: string;
  color2: string;
  buttons: {
    textOrIcon: string;
    action: () => void;
    isIconButton?: boolean;
  }[];
}
