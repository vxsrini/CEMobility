import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { Chart } from 'chart.js';

import L from 'leaflet';
import 'leaflet.markercluster';


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
export class Summary {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('map') mapContainer: ElementRef;


  barChart: any;
  cluster;
  mymap: any;
  enableFilter : boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.addGraph();
  }

  loadmap() {
    this.mymap = L.map('map').setView([39.0097, -95.844], 4);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.streets'
    }).addTo(this.mymap);


    L.marker([39.809734, -98.55562]).addTo(this.mymap)
      .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

    var popup = L.popup();


    var myButtonOptions = {
      'text': 'MyButton',  // string
      'iconUrl': 'images/myButton.png',  // string
      'onClick': function () { console.log("Clicked the button"); },  // callback function
      'hideText': true,  // bool
      'maxWidth': 30,  // number
      'doToggle': false,  // bool
      'toggleStatus': false  // bool
    }

    var ourCustomControl = L.Control.extend({
      options: {
        position: 'topright'
        //control position - allowed: 'topleft', 'topright', 'bottomleft', 'bottomright'
      },
      onAdd: function (map) {
        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
        container.style.backgroundColor = 'white';
        container.style.backgroundImage = "url(assets/imgs/logo.png)";
        container.style.width = '30px';
        container.style.height = '30px';
        container.onclick = this.customFilters();
        return container;
      }
    });



    var myButton = new ourCustomControl().addTo(this.mymap);
    var myButton1 = new ourCustomControl().addTo(this.mymap);


  }

  customFilters() {
    this.enableFilter = true;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Summary');
    this.loadmap();

    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Sites',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });
  }

}
