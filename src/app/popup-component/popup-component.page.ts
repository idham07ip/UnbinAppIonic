import { PopoverController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DetailHistoryPage } from '../detail-history/detail-history.page';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-popup-component',
  templateUrl: './popup-component.page.html',
  styleUrls: ['./popup-component.page.scss'],
})
export class PopupComponentPage implements OnInit {
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
  
  constructor(public popoverController: PopoverController, 
    public modalCtrl: ModalController,
    private storage: Storage,
    private http: HttpClient) { }

  ngOnInit() {
  }

  close(){
    this.popoverController.dismiss();
  }

  // getcapture() {
  //   this.storage.get('isLoggedIn').then(val => {
  //     let data: Observable<any>;
  //     data = this.http.get('http://localhost/konseling/api/getbyidbimbim/' + val);
  //     data.subscribe(result => {
  //       // console.log(result[0])
  //       this.arrayData = result;
  //       for(let a of this.arrayData){
  //         console.log(a);
  //       }
  //       // console.log(this.arrayData)
  //       // this.npm = result;
  //       this.kd_capture = result[0].kd_capture
  //       this.kd_bimbingan = result[0].kd_bimbingan;
  //       this.judul = result[0].judul;
  //       this.topik = result[0].topik;
  //       this.dospem = result[0].dospem;
  //       this.thn_akademik = result[0].thn_akademik;
  //       console.log(result[0].kd_capture);
  //       // console.log(result[0].kd_bimbingan);
  //       // console.log(result[0].judul);
  //       // console.log(result[0].topik);
  //       // console.log(result[0].dospem);
  //       // console.log(result[0].thn_akademik);

  //     });
  //   })
  // }

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: DetailHistoryPage,
      mode: 'ios'
    });
    return await modal.present();
    
  }
}