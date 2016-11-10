import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import { ActionSheetController } from 'ionic-angular';
import { ArtikelBacaPage } from '../artikel-baca/artikel-baca'


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

  constructor(public navCtrl: NavController, public http: Http, public actionSheetCtrl: ActionSheetController) {

  }


  ionViewDidLoad() {
    console.log('Hello ArtikelPage Page');
    this.http.get('http://cybex.agri.web.id/api/all_artikel.php').subscribe(res => {
      this.posts = res.json();
    });
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
            console.log('Destructive clicked');
          }
        },{
          text: 'Tanya/Diskusi',
          handler: () => {
            console.log('Archive clicked');
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
