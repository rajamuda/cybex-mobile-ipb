import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
<<<<<<< HEAD
=======

import { ActionSheetController } from 'ionic-angular';
>>>>>>> 546464c014b577cd2fd31caccd95c39bf9a3453d

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
<<<<<<< HEAD
	public posts;

  constructor(public navCtrl: NavController, public http: Http) {}
=======
	public artikel;

  constructor(public navCtrl: NavController, public http: Http, public actionSheetCtrl: ActionSheetController) {

  }
>>>>>>> 546464c014b577cd2fd31caccd95c39bf9a3453d

  ionViewDidLoad() {
    console.log('Hello ArtikelPage Page');
    this.http.get('http://cybex.agri.web.id/api/all_artikel.php').subscribe(res => {
<<<<<<< HEAD
      this.posts = res.json();
    });
=======
      this.artikel = res.json();
    });
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
>>>>>>> 546464c014b577cd2fd31caccd95c39bf9a3453d
  }

}
