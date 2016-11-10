import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ActionSheetController } from 'ionic-angular';

/*
  Generated class for the Cari page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cari',
  templateUrl: 'cari.html'
})
export class CariPage {
	private searchQuery = "";

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {}

  ionViewDidLoad() {
    console.log('Hello CariPage Page');
  }

  initializeItems() {

    // this.http.get('http://210.16.120.17/api/search.php?search='+this.searchQuery).map(res => res.json()).subscribe(data => {
    //     this.posts = data;
    // });

  }

 getItems(searchbar){
 	 this.initializeItems();
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
