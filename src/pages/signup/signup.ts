import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-login',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signup: {username?: string, password?: string, nama?: string, password2?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData) {}

  onSignup(form) {
      console.log(this.signup)
//    this.submitted = true;
//
//    if (form.valid) {
//      this.userData.signup(this.signup.username);
//      this.navCtrl.push(TabsPage);
//        this.navCtrl.push
//    }
  }
}
