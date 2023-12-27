import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activeLink: string = '';
  isFullScreenDivVisible: boolean = false;
  burgerImageSrc: string = '/assets/images/icons/Property 1=burger.png';
  private burgerImages: string[] = [
    '/assets/images/icons/Property 1=burger.png',
    '/assets/images/icons/Property 1=Transition.png',
    '/assets/images/icons/Property 1=close medium.png',
    '/assets/images/icons/Property 1=CLOSE FINAL.png'
  ];
  private animationInterval: any;

  setActiveLink(link: string): void {
      this.activeLink = link;
  }

  resetActiveLink(): void {
    this.activeLink = '';
  }

  toggleFullScreenDiv(): void {
    this.isFullScreenDivVisible = !this.isFullScreenDivVisible;
    if (this.isFullScreenDivVisible) {
      this.startBurgerAnimation();
    } else {
      this.stopBurgerAnimation();
      this.burgerImageSrc = this.burgerImages[0];
    }
  }

  private startBurgerAnimation(): void {
    let imageIndex = 0;
    this.animationInterval = setInterval(() => {
      this.burgerImageSrc = this.burgerImages[imageIndex];
      if (imageIndex < this.burgerImages.length - 1) {
        imageIndex++;
      } else {
        clearInterval(this.animationInterval); // Zaustavlja animaciju na poslednjoj slici
      }
    }, 400);
  }

  private stopBurgerAnimation(): void {
    clearInterval(this.animationInterval);
  }
}
