import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { Chart } from 'chart.js';

import L from 'leaflet';
import 'leaflet.markercluster';
import { Select } from 'ionic-angular';


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
  showFilter: boolean = false;

  listObj: any = {
    "header": [
      {
        "group": "Technology Type",
        open:true,
        "sub_groups": [
          {
            value: "5G",
            type: "boolean",
            type_values: ["true", "false"],
            current_value:"true"
          },
          {
            value:"4G",
            type: "boolean",
            type_values: ["true", "false"],
            current_value:"true"
          }
        ]
      },
      {
        "group": "Site Type",
        open:false,
        "sub_groups": [
          {
            value: "Micro",
            type: "boolean",
            type_values: ["true", "false"],
            current_value:"true"
          },
          {
            value:"Macro",
            type: "boolean",
            type_values: ["true", "false"],
            current_value:"true"
          },
          {
            value:"In Building",
            type: "boolean",
            type_values: ["true", "false"],
            current_value:"true"
          }
        ]
      },

    ],
    "data": [{}]
  };

  bounds: any = [
    [39.417703, -125.711319], // Southwest coordinates
    [39.621102, -69.900772]  // Northeast coordinates
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.addGraph();
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
    this.listObj.header.forEach(element => {
      if (element.open) {
        element.open = !element.open;
      }
    });
    item.open = !item.open;
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
