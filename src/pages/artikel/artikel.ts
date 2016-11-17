import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import { ActionSheetController } from 'ionic-angular';
import { ArtikelBacaPage } from '../artikel-baca/artikel-baca';
import { TulisArtikelPage } from '../tulis-artikel/tulis-artikel';
import { TulisDiskusiPage } from '../tulis-diskusi/tulis-diskusi';
import '../../providers/user-data';

/*
  Generated class for the Artikel page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-artikel',
  templateUrl: 'artikel.html'
})
export class ArtikelPage {

	public posts;
  public limit = 0;

  constructor(public navCtrl: NavController, public http: Http, public actionSheetCtrl: ActionSheetController) {

  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      this.ionViewDidLoad();
      refresher.complete();
    }, 1500);
  }

  ionViewDidLoad() {
    console.log('Hello ArtikelPage Page');
    this.http.get('http://cybex.agri.web.id/api/all_artikel.php?limit='+this.limit).subscribe(res => {
      this.posts = res.json();
    });
  
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.limit = this.limit+5;

      this.http.get('http://cybex.agri.web.id/api/all_artikel.php?limit='+this.limit).subscribe(res => {
        this.posts = this.posts.concat(res.json());
      });

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
   }

  baca(idArtikel){
    this.navCtrl.push(ArtikelBacaPage, idArtikel);
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Pilihan',
      buttons: [
        {
          text: 'Tulis Artikel',
          role: 'tulisArtikel',
          handler: () => {
            console.log('Tulis Artikel clicked');
            this.navCtrl.push(TulisArtikelPage);
          }
        },{
          text: 'Tanya/Diskusi',
          role: 'tulisDiskusi',
          handler: () => {
            console.log('Tulis Diskusi clicked');
            this.navCtrl.push(TulisDiskusiPage);
          }
        },{
          text: 'Batal',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
