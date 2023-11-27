import { Component, OnInit } from '@angular/core';
import 'aos/dist/aos.css';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
}
