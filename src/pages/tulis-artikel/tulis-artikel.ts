import { Component } from '@angular/core';
import { NavController, App, ActionSheetController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Camera } from 'ionic-native';
import { ImagePicker } from 'ionic-native';

import { UserData } from '../../providers/user-data';
import { LoginPage } from '../login/login';

/*
  Generated class for the TulisArtikel page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tulis-artikel',
  templateUrl: 'tulis-artikel.html'
})
export class TulisArtikelPage {

  public isi_artikel: string;
  public judul_artikel: string;
  public input: string;
  public id_kategori = 1;
  public id_topik = 1;
  public id_komoditas: any;
  public id_user_input = 12;
  public koms;

  constructor(public navCtrl: NavController, public app: App, public http: Http, public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController, public userData: UserData) {

  }

  ionViewDidLoad() {
    console.log('Hello TulisArtikelPage Page');
    this.http.get('http://cybex.agri.web.id/api/all_komoditas.php').subscribe(res => {
      this.koms = res.json();
    });

    if(this.userData.loginState){
      console.log("sudah login");
    }else{
      console.log("tidak login");
      let alert = this.alertCtrl.create({
        title: 'Anda belum login',
        subTitle: 'Silakan lakukan login terlebih dahulu untuk dapat menulis artikel',
        buttons: [{
            text: 'Login',
            handler: () => {
              this.app.getRootNav().setRoot(LoginPage);
          }},{
            text: 'Batal',
            role: 'cancel',
            handler: () =>{
              this.navCtrl.pop();
            }
          }
        ]
      });
      alert.present();
    }

  }

  dariKamera() {
  	console.log('getPicture Clicked');
    let options = '';
    Camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  dariGaleri() {
    let options = '';
    ImagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }

  kirim() {
      this.input = JSON.stringify({isi_artikel: this.isi_artikel, judul_artikel: this.judul_artikel,
        id_kategori: this.id_kategori, id_topik: this.id_topik, id_komoditas: this.id_komoditas, id_user_input: this.id_user_input});
      console.log(this.input);
      this.http.post("http://cybex.agri.web.id/api/tulis_artikel.php", this.input)
          .subscribe(data => {
                  this.navCtrl.pop();
      });
  }

  ambilGambar() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Pilihan',
      buttons: [
        {
          text: 'Kamera',
          role: 'tulisArtikel',
          handler: () => {
            console.log('Tulis Artikel clicked');
            this.dariKamera();
          }
        },{
          text: 'Galeri',
          role: 'tulisDiskusi',
          handler: () => {
            console.log('Tulis Diskusi clicked');
            this.dariGaleri();
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
