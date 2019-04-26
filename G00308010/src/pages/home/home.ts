import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  read:string;

  constructor(public navCtrl: NavController, private storage:Storage) {

  }
    
  ionViewWillEnter() {
    this.storage.get("read").then((data) => {
      this.read = data;
    }).catch((err) => {
      alert("Error accesssing Storage");
    });
  }

  openInheritance(){
    this.navCtrl.push('InheritancePage');
  }
  openWppp(){
    this.navCtrl.push('WpppPage');
  }
  openAssassinsApprentice(){
    this.navCtrl.push('AssassinsApprenticePage');
  }
  openRoyalAssassin(){
    this.navCtrl.push('RoyalAssassinPage');
  }
  openAssassinsQuest(){
    this.navCtrl.push('AssassinsQuestPage');
  }
  openFoolsErrand(){
    this.navCtrl.push('FoolsErrandPage');
  }
  openGoldenFool(){
    this.navCtrl.push('GoldenFoolPage');
  }
  openFoolsFate(){
    this.navCtrl.push('FoolsFatePage');
  }
  openFoolsAssassin(){
    this.navCtrl.push('FoolsAssassinPage');
  }
  openFoolsQuest(){
    this.navCtrl.push('FoolsQuestPage');
  }
  openAssassinsFate(){
    this.navCtrl.push('AssassinsFatePage');
  }
  openShipOfMagic(){
    this.navCtrl.push('ShipOfMagicPage');
  }
  openMadShip(){
    this.navCtrl.push('MadShipPage');
  }
  openShipOfDestiny(){
    this.navCtrl.push('ShipOfDestinyPage');
  }
  openDragonKeeper(){
    this.navCtrl.push('DragonKeeperPage');
  }
  openDragonHaven(){
    this.navCtrl.push('DragonHavenPage');
  }
  openCityOfDragons(){
    this.navCtrl.push('CityOfDragonsPage');
  }
  openBloodOfDragons(){
    this.navCtrl.push('BloodOfDragonsPage');
  }
}

