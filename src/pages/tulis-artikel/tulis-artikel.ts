import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { ImagePicker } from 'ionic-native';

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

  constructor(public navCtrl: NavController, public camera: Camera, public imagePicker: ImagePicker) {
    
  }

  ionViewDidLoad() {
    console.log('Hello TulisArtikelPage Page');
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
    this.ImagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }

  kirim() {
  	console.log('Kirim Clicked')
  }

}
