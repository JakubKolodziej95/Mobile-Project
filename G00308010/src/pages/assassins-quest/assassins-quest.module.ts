import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssassinsQuestPage } from './assassins-quest';

@NgModule({
  declarations: [
    AssassinsQuestPage,
  ],
  imports: [
    IonicPageModule.forChild(AssassinsQuestPage),
  ],
})
export class AssassinsQuestPageModule {}
