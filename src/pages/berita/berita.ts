import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

import { ArtikelBacaPage } from '../artikel-baca/artikel-baca';
import { NotifikasiPage } from '../notifikasi/notifikasi';

import 'rxjs/add/operator/catch';
/*
  Generated class for the Berita page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-berita',
  templateUrl: 'berita.html'
})
export class BeritaPage {
  public posts;
  public limit = 0;
  public httpErr = false;

  constructor(public navCtrl: NavController, public http: Http, public alertCtrl: AlertController) {
  	// this.getData();
  }

  ionViewDidLoad() {
  	this.getData();
  }

  notif() {
    this.navCtrl.push(NotifikasiPage);
  }

  doRefresh(refresher) {

    setTimeout(() => {
      this.ionViewDidLoad();
      refresher.complete();
    }, 1500);
  }

  getData() {
    this.http.get('http://cybex.agri.web.id/api/all_berita.php?limit='+this.limit).subscribe(res => {
      this.posts = res.json();
      this.httpErr = false;
    }, err => {this.showAlert(err.status)});
  }

  doInfinite(infiniteScroll) {

    setTimeout(() => {
      this.limit = this.limit+5;

      this.http.get('http://cybex.agri.web.id/api/all_berita.php?limit='+this.limit).subscribe(res => {
        this.posts = this.posts.concat(res.json());
        // this.httpErr = false;
      });

      infiniteScroll.complete();
    }, 500);
   }

  baca(idArtikel){
    this.navCtrl.push(ArtikelBacaPage, idArtikel);
  }

  showAlert(status){
  	if(status == 0){
  		let alert = this.alertCtrl.create({
	      title: 'Koneksi gagal',
	      subTitle: 'Mohon cek kembali sambungan internet perangkat Anda.',
	      buttons: ['OK']
	    });
	    alert.present();
  	}else{
  		let alert = this.alertCtrl.create({
	      title: 'Gagal menyambungkan ke server',
	      subTitle: 'Mohon tekan tombol \'Segarkan\' untuk me-refresh halaman ini.',
	      buttons: ['OK']
	    });
	    alert.present();
  	}

  	this.httpErr = true;
  }

}
