import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayStation } from './play-station';

@NgModule({
  declarations: [
    PlayStation,
  ],
  imports: [
    IonicPageModule.forChild(PlayStation),
  ],
})
export class PlayStationModule {}
