import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
// import { Camera } from 'ionic-native';
// import { ImagePicker } from 'ionic-native';

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
  public koms;

  constructor(public navCtrl: NavController, public http: Http) {
    
  }

  ionViewDidLoad() {
    console.log('Hello TulisArtikelPage Page');
    this.http.get('http://cybex.agri.web.id/api/all_komoditas.php').subscribe(res => {
      this.koms = res.json();
    });
  }

  dariKamera() {
  	console.log('getPicture Clicked');
    // let options = '';
    // Camera.getPicture(options).then((imageData) => {
    //  // imageData is either a base64 encoded string or a file URI
    //  // If it's base64:
    //  let base64Image = 'data:image/jpeg;base64,' + imageData;
    // }, (err) => {
    //  // Handle error
    // });
  }

  // dariGaleri() {
  //   let options = '';
  //   this.imagePicker.getPicture(options).then((results) => {
  //     for (var i = 0; i < results.length; i++) {
  //         console.log('Image URI: ' + results[i]);
  //     }
  //   }, (err) => { });
  // }

  kirim() {
      this.input = JSON.stringify({isi_artikel: this.isi_artikel, judul_artikel: this.judul_artikel});
      this.http.post("http://cybex.agri.web.id/api/tulis_artikel.php", this.input)
          .subscribe(data => {
                  this.navCtrl.pop();
      });
  }

}
