import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';

import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData, public http: Http, public alertCtrl: AlertController) { }

  onLogin(form) {
    let creds = JSON.stringify({username: this.login.username, password: this.login.password});

    console.log(creds);

    this.http.post('http://cybex.ipb.ac.id/test/index.php', creds).subscribe(res => {
      let response = res.json();
      // console.log(response['status']);

      if (response['status']){
        this.submitted = true;

        if (form.valid) {
          this.userData.setToken(response['token']);
          this.userData.setId(response['id']);
          this.userData.login(response['nama']);
          this.navCtrl.push(TabsPage);
        }
      }
      else {
        this.showAlert();
      }

    });
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Login Gagal',
      subTitle: 'Username atau Password salah',
      buttons: ['OK']
    });
    alert.present();
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
}
