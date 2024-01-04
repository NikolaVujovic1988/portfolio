import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpressumPopupComponent } from "../impressum-popup/impressum-popup.component";

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    imports: [CommonModule, ImpressumPopupComponent]
})
export class FooterComponent {
  showImpressumPopup: boolean = false;

}
