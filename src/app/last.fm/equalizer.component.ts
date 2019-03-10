import { Component } from '@angular/core';

@Component({
  selector: 'app-eq',
  template: `
    <div class="equalizer-container">
      <ol *ngFor="let barIndex of Arr(numberOfBars).fill(1)" class="equalizer-column">
        <li class="colour-bar"></li>
      </ol>
    </div>
  `,
  styleUrls: ['./equalizer.component.scss']
})
export class EqComponent {
  numberOfBars = 100;
  Arr = Array;
}
