import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoolsQuestPage } from './fools-quest';

@NgModule({
  declarations: [
    FoolsQuestPage,
  ],
  imports: [
    IonicPageModule.forChild(FoolsQuestPage),
  ],
})
export class FoolsQuestPageModule {}
