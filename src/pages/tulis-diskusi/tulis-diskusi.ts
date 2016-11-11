import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TulisDiskusiPage Page');
  }

  getPicture() {
  	console.log('getPicture Clicked');
  }

  kirim() {
  	console.log('Kirim Clicked')
  }

}
