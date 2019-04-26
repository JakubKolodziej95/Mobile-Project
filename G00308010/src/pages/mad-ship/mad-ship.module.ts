import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MadShipPage } from './mad-ship';

@NgModule({
  declarations: [
    MadShipPage,
  ],
  imports: [
    IonicPageModule.forChild(MadShipPage),
  ],
})
export class MadShipPageModule {}
