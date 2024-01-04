import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-impressum-popup',
  templateUrl: './impressum-popup.component.html',
  styleUrls: ['./impressum-popup.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class ImpressumPopupComponent {
  @Input() display: boolean = false;
  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.display = false;
    this.close.emit();
  }
}
