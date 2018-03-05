import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';


@Component({
  selector: 'page-play-station',
  templateUrl: 'play-station.html',
})
export class PlayStation {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayStation');
  }

}
