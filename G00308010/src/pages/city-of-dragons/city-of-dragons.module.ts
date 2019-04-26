import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CityOfDragonsPage } from './city-of-dragons';

@NgModule({
  declarations: [
    CityOfDragonsPage,
  ],
  imports: [
    IonicPageModule.forChild(CityOfDragonsPage),
  ],
})
export class CityOfDragonsPageModule {}
