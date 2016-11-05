import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Coba page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-coba',
  templateUrl: 'coba.html'
})
export class CobaPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CobaPage Page');
  }

}
