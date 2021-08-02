import { Component, Inject } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'house-trends';
  activeSection = 1;

  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) { }

  public fullPageScroll(e: HTMLElement, i: number): void {
    this.pageScrollService.scroll({
      scrollTarget: e,
      document: this.document
    });

    this.activeSection = i;
    console.log(this.activeSection);
  }
}
