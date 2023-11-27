import { Component } from '@angular/core';
import AOS from 'aos';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent {
  
  
  ngOnInit() {
    AOS.init();
  }

}
