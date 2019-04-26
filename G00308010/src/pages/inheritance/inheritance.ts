import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the InheritancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inheritance',
  templateUrl: 'inheritance.html',
})
export class InheritancePage {
  read:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InheritancePage');
  }

  update() {
    this.storage.set("inheritance", this.read);
    this.navCtrl.pop();
  }

  ionViewWillEnter(){
    this.storage.get("read")
    .then((data) =>
    {
      this.read = data;
    })
    .catch((err) => {
      alert("Error accesssing Storage")
    })
  } 
}
