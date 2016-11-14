import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

import { TulisKomentarPage } from '../tulis-komentar/tulis-komentar';
import 'rxjs/add/operator/map';
/*
  Generated class for the ArtikelBaca page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-artikel-baca',
  templateUrl: 'artikel-baca.html'
})
export class ArtikelBacaPage {
  public id: any;
  public posts: any;
  public comments: any;
  public nocom = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  	this.id = navParams.data;

  	http.get('http://cybex.agri.web.id/api/artikel_b.php?idartikel='+this.id).map(res => res.json()).subscribe(data => {
        this.posts = data;
    }); 

    http.get('http://cybex.agri.web.id/api/comment.php?idartikel='+this.id).map(res => res.json()).subscribe(data => {
        this.comments = data;
        if(data==''){
           this.nocom=true;
           console.log(this.nocom);
        }
    }); 

  }

  ionViewDidLoad() {
    console.log('Hello ArtikelBacaPage Page');
  }

  tulisKomentar() {
    this.navCtrl.push(TulisKomentarPage, this.id)
  }

}
