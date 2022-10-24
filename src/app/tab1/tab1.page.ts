import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  features: any[] = [
    {id: 1, name: 'Scan this QR Code', src: '/assets/qr1.png', background: 'rgba(255, 196, 9, 0.1)', page: ''}
  ];

  transactions: any[] = [
    {id: 1, vendor: 'Received from PhonePe', image: '', amount: 1500, time: '3:00PM'},
    {id: 2, vendor: 'Flaticons', image: '', amount: -1200, time: '4:00PM'}
  ];

  constructor() {}

}
