import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoldenFoolPage } from './golden-fool';

@NgModule({
  declarations: [
    GoldenFoolPage,
  ],
  imports: [
    IonicPageModule.forChild(GoldenFoolPage),
  ],
})
export class GoldenFoolPageModule {}
