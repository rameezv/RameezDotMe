import { Component, Inject, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent {
  arts = [
    '2020-04-13-al-khaliq',
    '2020-04-19-rabbi-zidni-ilma',
    '2020-04-29-ihdinas-siratal-mustakim',
    '2020-06-14-the-essence-of-evil',
    '2020-09-20-eternal',
    '2020-12-25-winter-wonderland',
    '2021-01-31-ribbit',
    '2021-02-03-rafael-israfil',
    '2021-02-07-is-the-food-ready-yet',
    '2021-02-10-flamenco-downtime',
    '2021-02-14-im-so-pretty',
    '2021-02-21-prairie-view-thats-not-a-prairie',
    '2021-03-13-the-universe-within-you',
    '2021-04-09-the-recursive-levels-of-the-soul',
    '2021-04-24-father-and-son',
    '2021-05-28-nirvana',
    '2021-06-03-festival',
    '2021-06-10-earthgang',
    '2021-08-11-spirit-elk',
    '2021-09-24-ylang-ylang',
    '2021-10-16-trapped-tripping-in-the-trash-twins-tailgating-trailer-toiler',
    '2021-10-17-relax',
    '2021-11-11-idiot',
    '2021-11-21-sing-it',
    '2022-02-13-the-last-good-emperor-of-rome',
    '2022-04-17-chaos',
    '2022-05-11-baby-sister',
    '2022-06-29-ginan',
    '2022-09-15-safari-selfie',
    '2022-11-05-herald-of-the-dawn',
    '2023-02-23-tous-les-memes',
    '2023-02-28-meezy-self-portrait',
  ].reverse();

  constructor(public dialog: MatDialog) {}

  openArtDialog(artId: string) {
    this.dialog.open(ArtDialogComponent, {
      height: '90%',
      width: '100%',
      panelClass: 'dark-panel-translucent',
      data: {artId, allIds: this.arts}
    })
  }

  scrollGallery(forward = true) {
    const multiplier = forward ? 1 : -1;
    const gallery = document.getElementById('gallery');
    const leftJ = gallery.scrollLeft + ((3 * gallery.offsetWidth / 4) * multiplier);
    const left = Math.round(leftJ / 212) * 212;
    gallery.scroll({
      left,
      behavior: "smooth",
    });
  }
}

interface ArtInfo {
  date: string;
  description: string;
  medium: string;
  name: string;
};

@Component({
  selector: 'app-art-dialog',
  templateUrl: './art-dialog.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtDialogComponent {
  URL_PREFIX = '/assets/images/art/';
  artInfo: ArtInfo;
  allIds: string[] = [];
  currentArtId: string;
  infoCollapsed = false;

  constructor(
    public dialogRef: MatDialogRef<ArtDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {artId: string, allIds: string[]},
    private http: HttpClient) {
      this.allIds = data.allIds;
      this.currentArtId = data.artId;
      this.loadArt();
    }

  loadArt() {
    const url = `${this.URL_PREFIX}${this.currentArtId}.json`;
    this.http.get(url).subscribe(jsonData => {
      this.artInfo = jsonData as ArtInfo;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  navigateGallery(forward = true) {
    const currentIndex = this.allIds.indexOf(this.currentArtId);
    if (forward && currentIndex < this.allIds.length - 1) {
      this.currentArtId = this.allIds[currentIndex + 1];
      this.loadArt();
    } else if (!forward && currentIndex > 0) {
      this.currentArtId = this.allIds[currentIndex - 1];
      this.loadArt();
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeypress(event) {
    if (event.code === 'ArrowLeft') {
      this.navigateGallery(false);
    }
    if (event.code === 'ArrowRight') {
      this.navigateGallery(true);
    }
  }
}
