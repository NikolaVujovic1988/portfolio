import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0, transform: 'translateY(-50px)' })), // Start state
      state('*', style({ opacity: 1, transform: 'translateY(0)' })), // End state

      transition(':enter', animate('0.4s ease')), // Animation for entering (fadeIn)
      transition(':leave', animate('0.4s ease')) // Animation for leaving (fadeOut)
    ])
  ]
})

export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  isFormDisabled: boolean = false;
  sendingMessage: boolean = false;
  messageArrived: boolean = false;

  @ViewChild('sendButton', { static: false }) sendButton!: ElementRef;

  initialImgSrc = 'assets/img/icons/arrow_up_white.png';
  hoverImgSrc = 'assets/img/icons/arrow_up_blue.png';

  constructor(private http: HttpClient) { }

  async sendMail(form: NgForm) {
    this.disableForm();
    let formData = new FormData();
    this.getFormInformation(formData);
    await this.sendData(formData);
    form.resetForm();
    this.enableForm();
  }


  disableForm() {
    let sendButton = this.sendButton.nativeElement;
    this.isFormDisabled = true;
    sendButton.disabled = true;
  }


  getFormInformation(formData: any) {
    formData.append('name', this.name);
    formData.append('message', this.message);
    formData.append('email', this.email);
  }


  async sendData(formData: any) {
    this.sendingMessage = true;

    try {
      // const response = 
      await this.http.post('https://timvoigt.ch/sendmail.php', formData, { responseType: 'text' }).toPromise();

      // if (response === 'success') {
      //   // console.log('Email sent successfully!');
      // } else {
      //   // console.error('Failed to send email.');
      // }

      this.showSuccessBanner();
      this.sendingMessage = false;
    } catch (error) {
      console.error('Error sending mail:', error);
      this.sendingMessage = false;
    }
  }


  enableForm() {
    let sendButton = this.sendButton.nativeElement;
    this.isFormDisabled = false;
    sendButton.disabled = false;
  }


  changeImage() {
    // Change the src to the hover image when hovering
    this.initialImgSrc = this.hoverImgSrc;
  }


  resetImage() {
    // Reset the src back to the initial image when not hovering
    this.initialImgSrc = 'assets/img/icons/arrow_up_white.png';
  }


  scrollTop() {
    window.scroll({ top: 0, left: 0 });
  }


  showSuccessBanner() {
    this.messageArrived = true;

    setTimeout(() => {
      this.messageArrived = false;
    }, 3000);
  }
}