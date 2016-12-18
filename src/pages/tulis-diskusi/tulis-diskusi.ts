import { Component } from '@angular/core';
import { NavController, App, AlertController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';

import { UserData } from '../../providers/user-data';
import { LoginPage } from '../login/login';

import { ImagePicker } from 'ionic-native';
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
  public noInput = false;
  public local;

  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public app: App, public http: Http, public alertCtrl: AlertController, public userData: UserData) 
  {
    // this.id_user_input = this.userData.getID();
    //   console.log(this.userData.getID());
    //   console.log("WOW"+this.id_user_input);
  }


  ionViewDidLoad() {
    console.log('Hello TulisDiskusiPage Page');

   if(this.userData.loginState){

     this.userData.getID();

    }
    else{
      let alert = this.alertCtrl.create({
        title: 'Anda belum login',
        subTitle: 'Silakan lakukan login terlebih dahulu untuk dapat membuat diskusi baru',
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
      if(this.isi_diskusi == undefined || this.judul_diskusi == undefined || !this.isi_diskusi || !this.judul_diskusi){
        this.noInput = true;
      }else{
        this.id_user_input = this.userData.ids;
        this.input = JSON.stringify({isi_artikel: this.isi_diskusi, judul_artikel: this.judul_diskusi, id_kategori: this.id_kategori, id_komoditas: this.id_komoditas, id_user_input: this.id_user_input, id_topik: this.id_topik});
        console.log(this.input);
        this.http.post("http://cybex.agri.web.id/api/tulis_artikel.php", this.input).subscribe(data => {
          let v = data.json();
          this.showToast(v['message']);
          this.navCtrl.pop();
        });
      }
  }

  showToast(val){
    if(val === "\nsukses"){
      let toast = this.toastCtrl.create({
        message: 'Diskusi berhasil dibuat',
        duration: 3500,
        position: 'top'
      });
      toast.present();
    }else{
      let toast = this.toastCtrl.create({
        message: '(x) Gagal membuat diskusi',
        duration: 3500,
        position: 'top'
      });
      toast.present();
    }

  }
}
