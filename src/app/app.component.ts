import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rameez-dot-me';

  socialIcons: SocialIcon[] = [
    {name: 'Facebook', url: 'http://facebook.com/rameezvirji', faIcon: 'facebook-square', color: '#3b5998'},
    {name: 'Twitter', url: 'http://twitter.com/rameezv', faIcon: 'twitter-square', color: '#00aced'},
    {name: 'Instagram', url: 'http://instagram.com/rameezvirji', faIcon: 'instagram', color: '#C32AA3'},
    {name: 'LinkedIn', url: 'http://linkedin.com/in/rameezvirji', faIcon: 'linkedin', color: '#007bb6'},
    {name: 'GitHub', url: 'http://github.com/rameezv', faIcon: 'github-square', color: '#fbc02d'},
    {name: 'GitHub', url: 'http://gitlab.com/rameezv', faIcon: 'gitlab', color: '#ff5722'},
  ];

  openLink(url: string) {
    window.open(url, '_blank');
  }
}

interface SocialIcon {
  name: string;
  url: string;
  faIcon: string;
  color: string;
}
