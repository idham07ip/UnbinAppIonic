import { PopupComponentPage } from './../popup-component/popup-component.page';
import { PopoverController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { DetailHistoryPage } from '../detail-history/detail-history.page';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public arrayData: any;
  unbinData: any;
  public nama: string;
  results: any;
  npm: any;
  kd_bimbingan: any;
  judul: string;
  topik: string;
  dospem: string;
  thn_akademik: any;
  images: any;
  keterangan: string;
  dentry: any;
  kd_capture: any;

  constructor(
    public popoverController: PopoverController,
    private http: HttpClient,
    private storage: Storage,
    private modalCtrl: ModalController
    ) {

      this.getcapture()

    }
  
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

  getcapture() {
    this.storage.get('isLoggedIn').then(val => {
      let data: Observable<any>;
      data = this.http.get('https://apikonseling.adistiradyiputra.my.id/api/getbyidbimbim/' + val);
      data.subscribe(result => {
        // console.log(result[0])
        this.arrayData = result;
        for(let a of this.arrayData){
          console.log(a);
        }
        // console.log(this.arrayData)
        // this.npm = result;
        this.kd_capture = result[0].kd_capture
        this.kd_bimbingan = result[0].kd_bimbingan;
        this.judul = result[0].judul;
        this.topik = result[0].topik;
        this.dospem = result[0].dospem;
        this.thn_akademik = result[0].thn_akademik;
        // console.log(result[0].kd_capture);
        // console.log(result[0].kd_bimbingan);
        // console.log(result[0].judul);
        // console.log(result[0].topik);
        // console.log(result[0].dospem);
        // console.log(result[0].thn_akademik);

      });
    })
  }

  async get(kd_capture) {
    console.log(kd_capture);
    const modal = await this.modalCtrl.create({
      component: DetailHistoryPage,
      componentProps: {
        "kd_capture": kd_capture
        
        
      }
    });
    return await modal.present();
  }

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
      this.getcapture()
    }, 2000);
  };

}
