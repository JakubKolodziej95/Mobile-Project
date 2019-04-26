import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AssassinsApprenticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assassins-apprentice',
  templateUrl: 'assassins-apprentice.html',
})
export class AssassinsApprenticePage {
  read:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssassinsApprenticePage');
  }

  update() {
    this.storage.set("assassins-apprentice", this.read);
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
