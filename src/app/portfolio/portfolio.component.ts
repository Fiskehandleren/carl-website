import { Component } from '@angular/core';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
    standalone: false
})
export class PortfolioComponent {
  hasAppeared = false;

  onAppear(appeared: boolean): void{
    if (this.hasAppeared){
      return;
    }
    this.hasAppeared = appeared;
  }
}
