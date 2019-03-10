import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
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
      description: 'aaaa',
      imageUrl: '',
      color1: '#0091ea',
      color2: '#43a047',
      buttons: [{
        textOrIcon: 'Visit',
        action: () => {
          window.open('http://bigtreeworld.com', '_blank');
        },
        isIconButton: false,
      }]
    },
    {
      name: 'TEDxYYC',
      description: 'aaaa',
      imageUrl: '',
      color1: '#aa0000',
      color2: '#d500f9',
      buttons: [{
        textOrIcon: 'Watch',
        action: () => {
          this.dialog.open(YoutubeViewerDialogComponent, {
            minWidth: '80%',
            minHeight: '80%',
            height: '80%',
            panelClass: 'dark-panel',
            data: {url: 'https://www.youtube.com/embed/LJFi3hLG8gw'}
          });
        },
        isIconButton: false,
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
      margin: -24px;
      width: calc(100% + 48px);
      height: calc(100% + 44px);
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
  imageUrl: string;
  color1: string;
  color2: string;
  buttons: {
    textOrIcon: string;
    action: () => void;
    isIconButton?: boolean;
  }[];
}
