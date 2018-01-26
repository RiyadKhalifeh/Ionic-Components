import { Component, ViewChild } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LogPage } from '../pages/log/log';
import { NewPage } from '../pages/new/new';
import { FriendsPage } from '../pages/friends/friends';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage: any = HomePage;
  @ViewChild(Nav) navCtrl: Nav;
  pages = [
    { component: HomePage, name: "Home Page" },
    { component: LogPage, name: "Log Page" },
    { component: FriendsPage, name: "Friends Page" },
    { component: TabsPage, name: "Tabs Page" },
  ];
 
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl : MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
  openPage(page) {
    this.navCtrl.push(page.component);
    this.menuCtrl.close();
  }
  closeMenu(){
    //this.menuCtrl.enable(false, 'right');    
    this.menuCtrl.close();
  }
}

