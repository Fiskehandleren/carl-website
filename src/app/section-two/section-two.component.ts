import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss'],
  /*animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(100%)', opacity: 0}),
          animate('700ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        /*transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('700ms', style({transform: 'translateY(100%)', opacity: 0}))
        ])
      ]
    )
  ]*/
})
export class SectionTwoComponent {
  hasAppeared = false;

  onAppear(appeared: boolean): void{
    this.hasAppeared = appeared;
  }

}
