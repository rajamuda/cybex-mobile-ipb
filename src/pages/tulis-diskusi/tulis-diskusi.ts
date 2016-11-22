import { Component } from '@angular/core';
import { NavController, App, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

import { UserData } from '../../providers/user-data';
import { LoginPage } from '../login/login';
/*
  Generated class for the TulisDiskusi page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tulis-diskusi',
  templateUrl: 'tulis-diskusi.html'
})
export class TulisDiskusiPage {

  public judul_diskusi: string;
  public isi_diskusi: string;
  public input: string;
  public id_kategori = 2;
  public id_komoditas = 1;
  public id_user_input = 12;
  public id_topik = 1;

  constructor(public navCtrl: NavController, public app: App, public http: Http, public alertCtrl: AlertController, public userData: UserData) {}

  ionViewDidLoad() {
    console.log('Hello TulisDiskusiPage Page');

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

  getPicture() {
  	console.log('getPicture Clicked');
  }

  
  kirim() {
      this.input = JSON.stringify({isi_artikel: this.isi_diskusi, judul_artikel: this.judul_diskusi, id_kategori: this.id_kategori, id_komoditas: this.id_komoditas, id_user_input: this.id_user_input, id_topik: this.id_topik});
      console.log(this.input);
      this.http.post("http://cybex.agri.web.id/api/tulis_artikel.php", this.input)
          .subscribe(data => {
                  this.navCtrl.pop();
      });
  }
}
