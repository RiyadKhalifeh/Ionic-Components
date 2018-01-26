import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { FriendsPage } from '../friends/friends';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
 // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = FriendsPage;
  tab3Root: any = LoginPage;
  tabTwo:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabTwo = 6;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
