import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent {
  hasAppeared = false;

  onAppear(): void {
    if (this.hasAppeared){
      return;
    }
    this.hasAppeared = true;
  }

}
