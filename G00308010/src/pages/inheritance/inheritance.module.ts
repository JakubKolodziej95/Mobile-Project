import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InheritancePage } from './inheritance';

@NgModule({
  declarations: [
    InheritancePage,
  ],
  imports: [
    IonicPageModule.forChild(InheritancePage),
  ],
})
export class InheritancePageModule {}
