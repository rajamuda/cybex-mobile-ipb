import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import { ActionSheetController } from 'ionic-angular';
import { DiskusiBacaPage } from '../diskusi-baca/diskusi-baca';

@Component({
  selector: 'page-diskusi',
  templateUrl: 'diskusi.html'
})
export class DiskusiPage {
  public status;
  public nama;
  public test;
  public diskusi;
  public isi;

  public response;

  constructor(public navCtrl: NavController, public http: Http, public actionSheetCtrl: ActionSheetController) {

  }

  ionViewDidLoad() {
    console.log('Hello DiskusiPage Page');
    this.http.get('http://cybex.agri.web.id/api/all_diskusi.php').subscribe(res => {
      this.diskusi = res.json();
    });
  }

  baca(idDis){
    console.log("diskusi!!!");
    this.navCtrl.push(DiskusiBacaPage, idDis);
  }

  kirim() {
    let send = JSON.stringify({value : this.isi});

    this.http.post('http://cybex.agri.web.id/api/test.php', send).subscribe(res => {
      this.response = res;

      if (res) {
        this.isi = '';
        this.response = '';
      }
    })
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
