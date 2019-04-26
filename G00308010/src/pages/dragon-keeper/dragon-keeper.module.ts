import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DragonKeeperPage } from './dragon-keeper';

@NgModule({
  declarations: [
    DragonKeeperPage,
  ],
  imports: [
    IonicPageModule.forChild(DragonKeeperPage),
  ],
})
export class DragonKeeperPageModule {}
