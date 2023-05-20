import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  hasAppeared = false;
  images = [
    {src: 'assets/Danmarks_Tekniske_Universitet_(logo).svg.png', alt: 'Danmarks Tekniske Universitet logo'},
    {src: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Ku-ucph-logo-svg.svg', alt: 'Ku-ucph logo'},
    {src: 'assets/Danske.png', alt: 'Danske logo'},
    {src: 'assets/National_University_of_Singapore-Logo.wine.png', alt: 'National University of Singapore Logo'},
    {src: 'assets/GM.png', alt: 'GM logo'}
  ];
  repeatedImages: {src: string, alt: string}[] = [];
  constructor() { 
    for(let i=0; i<4; i++){
      this.repeatedImages = this.repeatedImages.concat(this.images);
    }
    console.log(this.repeatedImages.length);
  }
  onAppear(): void {
    if (this.hasAppeared){
      return;
    }
    this.hasAppeared = true;
  }

}
