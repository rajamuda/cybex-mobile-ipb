import { Component, OnInit, ElementRef } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { ArtikelPage } from '../artikel/artikel';
import { CariPage } from '../cari/cari';
import { DiskusiPage } from '../diskusi/diskusi';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = DiskusiPage;
  tab2Root: any = ArtikelPage;
  tab3Root: any = CariPage;
  mySelectedIndex: number;
  public ionScroll;

  constructor(navParams: NavParams, public myElement: ElementRef) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }


  ssss(){
  	console.log("jalaaaaan!");
  	
  }

}
