import { PopoverController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DetailHistoryPage } from '../detail-history/detail-history.page';

@Component({
  selector: 'app-popup-component',
  templateUrl: './popup-component.page.html',
  styleUrls: ['./popup-component.page.scss'],
})
export class PopupComponentPage implements OnInit {
  
  constructor(public popoverController: PopoverController, public modalCtrl: ModalController,) { }

  ngOnInit() {
  }

  close(){
    this.popoverController.dismiss();
  }
  
  async showModal() {
    const modal = await this.modalCtrl.create({
      component: DetailHistoryPage,
      mode: 'ios'
    });
    return await modal.present();
    
  }
}