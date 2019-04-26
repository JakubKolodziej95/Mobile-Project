import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssassinsFatePage } from './assassins-fate';

@NgModule({
  declarations: [
    AssassinsFatePage,
  ],
  imports: [
    IonicPageModule.forChild(AssassinsFatePage),
  ],
})
export class AssassinsFatePageModule {}
