import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

/*
  Generated class for the TulisKomentar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tulis-komentar',
  templateUrl: 'tulis-komentar.html'
})
export class TulisKomentarPage {
  public id_artikel: any;
  public isi_komentar: string;
  public id_user_input = 12;
  public input: string;
  public noInput = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  	this.id_artikel = navParams.data;
  }

  ionViewDidLoad() {
    console.log('Hello TulisKomentarPage Page');
  }

   kirim() {
      if(this.isi_komentar == undefined){
        this.noInput = true;
      }else{
        this.input = JSON.stringify({id_artikel: this.id_artikel, isi_komentar: this.isi_komentar, id_user_input: this.id_user_input});
        console.log(this.input);
        this.http.post("http://cybex.agri.web.id/api/tulis_komentar.php", this.input)
            .subscribe(data => {
              this.navCtrl.pop();
        });
      }
  }

}
