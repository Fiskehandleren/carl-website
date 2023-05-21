import { AfterViewInit, Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Directive({
  selector: '[appear]'
})
export class AppearDirective implements AfterViewInit, OnDestroy {
  @Output()
  appear: EventEmitter<boolean>;

  elementPos = 0;
  elementHeight = 0;

  scrollPos = 0;
  windowHeight = 0;
  subscriptionScroll: Subscription | undefined;
  subscriptionResize: Subscription | undefined;

  hasAppeared = false;

  constructor(private element: ElementRef){
    this.appear = new EventEmitter<boolean>();
  }

  saveDimensions(): void {
    this.elementPos = this.getOffsetTop(this.element.nativeElement);
    this.elementHeight = this.element.nativeElement.offsetHeight;
    this.windowHeight = window.innerHeight;
  }

  saveScrollPos(): void {
    this.scrollPos = window.scrollY;
  }

  getOffsetTop(element: any): number {
    let offsetTop = element.offsetTop || 0;
    if (element.offsetParent) {
      offsetTop += this.getOffsetTop(element.offsetParent);
    }
    return offsetTop;
  }
  checkVisibility(): void {
    if (this.isVisible()) {
      // double check dimensions (due to async loaded contents, e.g. images)
      this.saveDimensions();
      if (this.isVisible()) {
        // this.unsubscribe();
        this.appear.emit(true);
        this.hasAppeared = true;
      }
    }
    else if (this.hasAppeared && !this.isVisible()) {
      this.appear.emit(false);
      this.hasAppeared = false;
    }
}
  isVisible(): boolean {
    return this.scrollPos + 500 >= this.elementPos || (this.scrollPos + this.windowHeight) >= (this.elementPos + this.elementHeight);
  }

  subscribe(): void {
    this.subscriptionScroll = fromEvent(window, 'scroll')// .startWith(null)
      .subscribe(() => {
        this.saveScrollPos();
        this.checkVisibility();
      });
    this.subscriptionResize = fromEvent(window, 'resize')// .startWith(null)
      .subscribe(() => {
        this.saveDimensions();
        this.checkVisibility();
      });
  }
  unsubscribe(): void{
    if (this.subscriptionScroll){
      this.subscriptionScroll.unsubscribe();
    }
    if (this.subscriptionResize){
      this.subscriptionResize.unsubscribe();
    }
  }

  ngAfterViewInit(): void{
    this.subscribe();
  }
  ngOnDestroy(): void {
    this.unsubscribe();
  }
}
