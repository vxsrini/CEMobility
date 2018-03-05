import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OneFiberDashboard } from './one-fiber-dashboard';


@NgModule({
  declarations: [
    OneFiberDashboard,
  ],
  imports: [
    IonicPageModule.forChild(OneFiberDashboard),
  ],
  exports: [
    OneFiberDashboard
  ]
})
export class OneFiberDashboardModule {}
