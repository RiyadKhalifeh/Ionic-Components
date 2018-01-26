import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    alert(this.navParams.get('UserName'));
  }

  ionViewDidLoad() {
    alert('ionViewDidLoad TestPage');
    //this.goToOtherPage();
  }

  goToOtherPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(LoginPage);
  }

}
