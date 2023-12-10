import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  activeLink: string = '';

    setActiveLink(link: string): void {
        this.activeLink = link;
    }
}
