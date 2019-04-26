import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShipOfDestinyPage } from './ship-of-destiny';

@NgModule({
  declarations: [
    ShipOfDestinyPage,
  ],
  imports: [
    IonicPageModule.forChild(ShipOfDestinyPage),
  ],
})
export class ShipOfDestinyPageModule {}
