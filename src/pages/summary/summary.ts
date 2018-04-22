import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';
//import { Chart } from 'chart.js';
import { Http } from '@angular/http';
//import { GoogleCharts } from 'google-charts';
import { GoogleChartComponent } from '../GoogleChartComponent';
import 'rxjs/add/operator/map';


import L from 'leaflet';
import 'leaflet.markercluster';
import { Select } from 'ionic-angular';
import { Injectable } from '@angular/core';
//import PouchDB from 'pouchdb';
//import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';

/**
 * Generated class for the Summary page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})
export class Summary extends GoogleChartComponent {

  //@ViewChild('barCanvas') barCanvas;
  @ViewChild('chart1') chart1;
  @ViewChild('map') mapContainer: ElementRef;


  barChart: any;
  cluster;
  mymap: any;
  showFilter: boolean = false;
  private _db;
  private options;
  private data;
  private chart;

  listObj: any;

  bounds: any = [
    [39.417703, -125.711319], // Southwest coordinates
    [39.621102, -69.900772]  // Northeast coordinates
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    //this.addGraph();
    super();

    //GoogleCharts.load(this.drawChart);

    this.http.get('http://vxsrini-desktop:3000/getFilterForSummary').map(res => res.json()).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.listObj = data;
      },
      err => {
        console.log("Error Initiating - Could not obtain necessary data");
      }
    );

    /*   PouchDB.plugin(cordovaSqlitePlugin);
       this._db = new PouchDB('cofee.db', { adapter: 'cordova-sqlite' }); */
  }

  loadmap() {
    this.mymap = L.map('map', { maxBounds: this.bounds }).fitBounds(this.bounds);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      id: 'mapbox.streets',
      maxBounds: this.bounds
    }).addTo(this.mymap);


    /*   L.marker([39.809734, -98.55562]).addTo(this.mymap)
         .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
   
       var popup = L.popup(); */

  }

  filterButtonHandler() {
    console.log("Filter Button Handler Involked");
    this.showFilter = !this.showFilter;

  }


  toggleSection(item) {
    /*
    this.listObj.header.forEach(element => {
      if (element.open) {
        element.open = !element.open;
      }
    });*/
    item.open = !item.open;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Summary');
    this.loadmap();
  }

  drawGraph() {
    console.log("DrawGraph Evolution...");
    this.data =  this.getGoogle().visualization.arrayToDataTable([
      ['Evolution', 'Imports', 'Exports'],
      ['A', 8695000, 6422800],
      ['B', 3792000, 3694000],
      ['C', 8175000, 800800]
    ]);

    this.options = {
      title: 'Evolution, 2014',
      chartArea: { width: '70%' },
      hAxis: {
        title: 'Value in USD',
        minValue: 0
      },
      vAxis: {
        title: 'Members'
      }
    };

    var goog = this.getGoogle();
    this.chart = new goog.visualization.BarChart(document.getElementById('POR'));

    //this.chart = this.createBarChart(document.getElementById('POR'));
    this.chart.draw(this.data, this.options);
  }

}
