import { NgModule } from '@angular/core';

import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';

import { UserData } from '../providers/user-data';

import { ArtikelPage } from '../pages/artikel/artikel';
import { CariPage } from '../pages/cari/cari';
import { DiskusiPage } from '../pages/diskusi/diskusi';
import { DiskusiBacaPage } from '../pages/diskusi-baca/diskusi-baca';
import { ArtikelBacaPage } from '../pages/artikel-baca/artikel-baca';
import { TulisArtikelPage } from '../pages/tulis-artikel/tulis-artikel';
import { TulisDiskusiPage } from '../pages/tulis-diskusi/tulis-diskusi';


@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    PopoverPage,
    SignupPage,
    TabsPage,
    TutorialPage,
    ArtikelPage,
    CariPage,
    DiskusiPage,
    ArtikelBacaPage,
    DiskusiBacaPage,
    TulisArtikelPage,
    TulisDiskusiPage
  ],
  imports: [
    IonicModule.forRoot(ConferenceApp, {
      tabsPlacement: 'top',
      tabsHideOnSubPages: "true"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    PopoverPage,
    SignupPage,
    TabsPage,
    TutorialPage,
    ArtikelPage,
    CariPage,
    DiskusiPage,
    ArtikelBacaPage,
    DiskusiBacaPage,
    TulisArtikelPage,
    TulisDiskusiPage
  ],
  providers: [UserData, Storage]
})
export class AppModule {}
