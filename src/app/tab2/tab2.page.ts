import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  NavController,
  ToastController,
  LoadingController,
} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public nama: string;
  thn_akademik_setting: any;
  id: any;
  results: any;
  npm: any;
  kd_bimbingan: any;
  judul: string;
  topik: string;
  dospem: string;
  thn_akademik_capture: any;
  images: any;
  keterangan: string;
  dentry: any;
  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private http: HttpClient,
    private route: ActivatedRoute,
    private storage: Storage
  ) {
       this.getcapture();
      this.getsetting();

    
    
  }

  loadImageFromDevice(event) {
    this.images = event.target.files[0];
  }

  getcapture() {
    this.storage.get('isLoggedIn').then(val => {
      let data: Observable<any>;
      data = this.http.get('https://apikonseling.adistiradyiputra.my.id/api/getbimbingan/' + val);
      data.subscribe(result => {
        this.npm = result;
        this.kd_bimbingan = result[0].kd_bimbingan;
        this.judul = result[0].judul;
        this.topik = result[0].topik;
        this.dospem = result[0].dospem;
        this.thn_akademik_capture = result[0].thn_akademik;
        // console.log(result[0].kd_bimbingan);
        // console.log(result[0].judul);
        // console.log(result[0].topik);
        // console.log(result[0].dospem);
        // console.log(result[0].thn_akademik);

      });
    })  
  }

  getsetting() {
    let data: Observable<any>;
    data = this.http.get('https://apikonseling.adistiradyiputra.my.id/api/getsetting/');
    data.subscribe(result => {
      this.id = result[0].id;
      this.thn_akademik_setting = result[0].thn_akademik;
      console.log(result[0].id);
      console.log(result[0].thn_akademik);
  
    });
  }

  async presentToast(text, colour) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top',
      color: colour,
    });
    toast.present();
  }

  async uploadData() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
    });
    const formdata = new FormData();
    formdata.append('kd_bimbingan', this.kd_bimbingan);
    formdata.append('keterangan', this.keterangan);
    formdata.append('dentry', this.dentry);
    formdata.append('thn_akademik', this.thn_akademik_capture);
    
    formdata.append('file', this.images);
    // Use your own API!
    const url =
      'https://apikonseling.adistiradyiputra.my.id/api/upload/'
    if (
      this.thn_akademik_capture === undefined ||
      this.kd_bimbingan === undefined ||
      this.images === undefined ||
      this.keterangan === undefined ||
      this.dentry === undefined
    ) {
      this.presentToast('Data tidak boleh ada yang kosong!', 'danger');
    } else {
      await loading.present();
      this.http
        .post(url, formdata)
        .pipe(
          finalize(() => {
            loading.dismiss();
          })
        )
        .subscribe((event) => {
          this.results = event;
          if (this.results.message === 'success') {
            this.presentToast('File upload complete.', 'primary');
            console.log(this.kd_bimbingan);
            this.navCtrl.navigateRoot(['/tabs/tab2']);
            // this.thn_akademik = ""; 
            // this.images = "";
            // this.keterangan = "";
            // this.dentry = "";
          } else {
            this.presentToast(this.results.error, 'danger');
            console.log(event);
          }
        });
    }
  }

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
      this.getsetting();
      this.getcapture();
    }, 2000);
  };
 
}
