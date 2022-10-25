import { PopupComponentPage } from './../popup-component/popup-component.page';
import { PopoverController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public popoverController: PopoverController) {}
  
  async presentPopover(ev: any){
    const popover = await this.popoverController.create({
      component: PopupComponentPage,
      event: ev,
      mode: 'ios',
      translucent: true,
    });
    await popover.present();
    const {role} = await popover.onDidDismiss();
  }

}
