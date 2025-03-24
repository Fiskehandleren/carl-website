import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: false
})
export class AboutComponent {
  hasAppeared = false;

  public onAppear(appeared: boolean): void{
    if (this.hasAppeared){
      return;
    }
    this.hasAppeared = appeared;
  }
}
