import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

/*
  Generated class for the Artikel page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-artikel',
  templateUrl: 'artikel.html'
})
export class ArtikelPage {
	public posts;

  constructor(public navCtrl: NavController, public http: Http) {}

  ionViewDidLoad() {
    console.log('Hello ArtikelPage Page');
    this.http.get('http://cybex.agri.web.id/api/all_artikel.php').subscribe(res => {
      this.posts = res.json();
    });
  }

}
