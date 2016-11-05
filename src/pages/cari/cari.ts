import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CariPage Page');
  }

}
