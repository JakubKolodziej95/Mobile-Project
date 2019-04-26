import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoolsErrandPage } from './fools-errand';

@NgModule({
  declarations: [
    FoolsErrandPage,
  ],
  imports: [
    IonicPageModule.forChild(FoolsErrandPage),
  ],
})
export class FoolsErrandPageModule {}
