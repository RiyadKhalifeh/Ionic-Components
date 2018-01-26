import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { LoadingController, ActionSheetController, MenuController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LogPage } from '../log/log';
import { TestPage } from '../test/test';
// import { Loading } from 'ionic-angular/components/loading/loading';
import { PopoverController } from 'ionic-angular';
import { FriendsPage } from '../friends/friends';
import { NewPage } from '../new/new';
import { ToastController } from 'ionic-angular';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  segment: string = "seg1";
  isAndroid: boolean = true;
  toggleVal: boolean;

  testRadioOpen;
  testRadioResult;
  testCheckboxOpen;
  testCheckboxResult;
  //Events Var
  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number = 0;
  public dblclick: number = 0;
  public event = {
    month: '2017-02-19',
    timeStarts: '07:43',
    timeEnds: '2017-02-20'
  }
  //Icon Var
  myIcon: string = "home";
  //Range Var
  range1: number = 1;
  range2: number = 1;
  range3: number = 1;
  range4: number = 1;
  items;
  public toggled: boolean = false;


  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public modalCtrl: ModalController, public menu: MenuController, public popoverCtrl: PopoverController, public toastCtrl: ToastController) {
    this.range1 = 50;
    menu.enable(true);
    this.initializeItems();
    this.toggled = false;
  }
  //Action Sheet
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            alert('Destructive clicked');
          }
        }, {
          text: 'Archive',
          handler: () => {
            alert('Archive clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            alert('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  //Alerts
  //Basic Alert
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend Omar added to your page',
      buttons: ['OK']
    });
    alert.present();
  }
  //Prompt Alert
  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a your friend name",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            alert('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            alert(data.title);
          }
        }
      ]
    });
    prompt.present();
  }

  //Confirm Alert
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Delete Friend?',
      message: 'Do you want to delete your friend?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            alert('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            alert('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  //Radio Alert
  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'Red',
      value: 'red',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Green',
      value: 'green',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
  }
  //Checkbox Alert
  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which country have you visited?');

    alert.addInput({
      type: 'checkbox',
      label: 'Syria',
      value: 'syria',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Lebanon',
      value: 'lebanon'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present();
  }

  //Gestures
  pressEvent(e) {
    this.press++
  }
  panEvent(e) {
    this.pan++
  }
  swipeEvent(e) {
    this.swipe++
  }
  tapEvent(e) {
    this.tap++
  }
  dblclickEvent(e) {
    this.dblclick++
  }

  CountriesItem = [
    'Syria',
    'Iraq',
    'Egypt',
    'Jordan',
    'Saudi'
  ];

  itemSelected(item: string) {
    alert("Selected Item: " + item);
  }

  presentLoading() {
    //this.navCtrl.push(TestPage);
    this.navCtrl.setRoot(TestPage, { UserName: "Ahmad" });
    // this.menu.enable(true, 'left'); 
    // this.menu.enable(false, 'right');
    let loader = this.loadingCtrl.create({
      // spinner: 'hide',  
      // content: `
      // <div class="custom-spinner-container">
      //   <div class="custom-spinner-box">Hello</div>
      // </div>`,    
      //showBackdrop: false
      content: "Please wait...",
      duration: 3000,
    });
    loader.onDidDismiss(() => {
      alert('Dismissed loading');
    });

    // loader.present();

  }

  presentModal() {
    let modal = this.modalCtrl.create(LogPage, {
      userParams1: "test1",
      userParams2: "test2"
    });
    modal.present();
    modal.onDidDismiss(data => {
      alert(data["userParams3"]);
    });
  }

  goToOtherPage() {
    this.navCtrl.setRoot(LoginPage);
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(NewPage);
    popover.present();
  }

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'Buenos Aires',
      'Cairo',
      'Dhaka',
      'Edinburgh',
      'Geneva',
      'Genoa',
      'Glasglow',
      'Hanoi',
      'Hong Kong',
      'Islamabad',
      'Istanbul',
      'Jakarta',
      'Kiel',
      'Kyoto',
      'Le Havre',
      'Lebanon',
      'Lhasa',
      'Lima',
      'London',
      'Los Angeles',
      'Madrid',
      'Manila',
      'New York',
      'Olympia',
      'Oslo',
      'Panama City',
      'Peking',
      'Philadelphia',
      'San Francisco',
      'Seoul',
      'Taipeh',
      'Tel Aviv',
      'Tokio',
      'Uelzen',
      'Washington'
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the ev target
    var val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  onCancel(event) { }

  public toggle(): void {
    this.toggled = this.toggled ? false : true;
  }

  presentToast(position) {
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000,
      position: position
    });
    toast.present();
  }

}

