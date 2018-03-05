import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Summary } from './summary';

@NgModule({
  declarations: [
    Summary,
  ],
  imports: [
    IonicPageModule.forChild(Summary),
  ],
})
export class SummaryModule {}
