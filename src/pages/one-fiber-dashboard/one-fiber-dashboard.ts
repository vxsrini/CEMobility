import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
import { PlayStation } from '../play-station/play-station';

//import { Chart } from 'chart.js';


@IonicPage()
@Component({
  selector: 'page-one-fiber-dashboard',
  templateUrl: 'one-fiber-dashboard.html',
})
export class OneFiberDashboard {

  tab1Root: any = PlayStation;
  tab2Root: any = PlayStation;
  tab3Root: any = PlayStation;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ngZone: NgZone) {
    //this.addGraph();
  }

}
