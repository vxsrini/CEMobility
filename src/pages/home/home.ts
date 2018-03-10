import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { OneFiberDashboard } from '../one-fiber-dashboard/one-fiber-dashboard';
import { Summary } from '../summary/summary';
import { PlayStation } from '../play-station/play-station';



/**
 * Generated class for the About page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  private param1: string;
  private param2: string;
  private allParams;

  public summaryView = OneFiberDashboard;
  public rootPage1 = Summary;
  public myBool = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.param1 = this.navParams.get("param1");
    this.param2 = this.navParams.get("param2");
    this.allParams = this.navParams.data;
    //navCtrl.push(PlayStation);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad About');
  }

  goBack() {
    this.navCtrl.pop();
  }

}
