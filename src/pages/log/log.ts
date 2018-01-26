import { Component } from '@angular/core';
import { ModalController, ViewController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-log',
    templateUrl: 'log.html'
})
export class LogPage {
    constructor(public modalCtrl: ModalController, public viewCtrl: ViewController, public navParams: NavParams) {
        alert(this.navParams.get('userParams1'));
        alert(this.navParams.get('userParams2'));
    }
    dismiss() {
        this.viewCtrl.dismiss({ userParams3: "test3" });
    }
}