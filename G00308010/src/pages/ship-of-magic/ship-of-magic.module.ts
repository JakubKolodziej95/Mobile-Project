import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShipOfMagicPage } from './ship-of-magic';

@NgModule({
  declarations: [
    ShipOfMagicPage,
  ],
  imports: [
    IonicPageModule.forChild(ShipOfMagicPage),
  ],
})
export class ShipOfMagicPageModule {}
