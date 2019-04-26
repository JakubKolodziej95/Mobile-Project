import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoolsFatePage } from './fools-fate';

@NgModule({
  declarations: [
    FoolsFatePage,
  ],
  imports: [
    IonicPageModule.forChild(FoolsFatePage),
  ],
})
export class FoolsFatePageModule {}
