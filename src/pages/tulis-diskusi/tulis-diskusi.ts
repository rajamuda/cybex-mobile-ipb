import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

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
  public id_user_input = 16;
  public id_topik = 1;

  constructor(public navCtrl: NavController, public http: Http) {}

  ionViewDidLoad() {
    console.log('Hello TulisDiskusiPage Page');
  }

  getPicture() {
  	console.log('getPicture Clicked');
  }

  
  kirim() {
      this.input = JSON.stringify({isi_diskusi: this.isi_diskusi, judul_diskusi: this.judul_diskusi, id_kategori: this.id_kategori, id_komoditas: this.id_komoditas, id_user_input: this.id_user_input, id_topik: this.id_topik});
      this.http.post("http://cybex.agri.web.id/api/tulis_artikel.php", this.input)
          .subscribe(data => {
                  this.navCtrl.pop();
      });
  }
}
