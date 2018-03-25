webpackJsonp([1],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneFiberDashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__play_station_play_station__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Chart } from 'chart.js';
var OneFiberDashboard = (function () {
    function OneFiberDashboard(navCtrl, navParams, ngZone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ngZone = ngZone;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__play_station_play_station__["a" /* PlayStation */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__play_station_play_station__["a" /* PlayStation */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__play_station_play_station__["a" /* PlayStation */];
        //this.addGraph();
    }
    OneFiberDashboard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-one-fiber-dashboard',template:/*ion-inline-start:"/home/vxsrini/Development/CEMobility/src/pages/one-fiber-dashboard/one-fiber-dashboard.html"*/`  <ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Play Station" tabIcon="musical-notes"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Edit Station" tabIcon="podium"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Edit Language" tabIcon="map"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Settings" tabIcon="flower"></ion-tab>\n  </ion-tabs>\n`/*ion-inline-end:"/home/vxsrini/Development/CEMobility/src/pages/one-fiber-dashboard/one-fiber-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], OneFiberDashboard);
    return OneFiberDashboard;
}());

//# sourceMappingURL=one-fiber-dashboard.js.map

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/one-fiber-dashboard/one-fiber-dashboard.module": [
		493,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayStation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayStation = (function () {
    function PlayStation(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PlayStation.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlayStation');
    };
    PlayStation = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-play-station',template:/*ion-inline-start:"/home/vxsrini/Development/CEMobility/src/pages/play-station/play-station.html"*/`<ion-card class="card">\n  <ion-card-header>\n    Bar Chart\n  </ion-card-header>\n  <ion-card-content>\n    <button ion-button>Default</button>\n  </ion-card-content>\n</ion-card>`/*ion-inline-end:"/home/vxsrini/Development/CEMobility/src/pages/play-station/play-station.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavParams */]])
    ], PlayStation);
    return PlayStation;
}());

//# sourceMappingURL=play-station.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__one_fiber_dashboard_one_fiber_dashboard__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__summary_summary__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the About page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.summaryView = __WEBPACK_IMPORTED_MODULE_3__one_fiber_dashboard_one_fiber_dashboard__["a" /* OneFiberDashboard */];
        this.rootPage1 = __WEBPACK_IMPORTED_MODULE_4__summary_summary__["a" /* Summary */];
        this.myBool = true;
        this.param1 = this.navParams.get("param1");
        this.param2 = this.navParams.get("param2");
        this.allParams = this.navParams.data;
        //navCtrl.push(PlayStation);
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad About');
    };
    HomePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/vxsrini/Development/CEMobility/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar color="danger">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-left>CoFEE Engineering</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col col-1 id="sideMenu" class="menuCol">\n      <ion-list>\n        <button ion-button icon-only large block clear>\n          <ion-icon md-name="home"></ion-icon>\n        </button>\n        <button ion-button icon-only large block clear>\n          <ion-icon md-name="access_time"></ion-icon>\n        </button>\n        <button ion-button icon-only large block clear>\n          <ion-icon md-name="assignment"></ion-icon>\n        </button>\n        <button ion-button icon-only large block clear>\n          <ion-icon md-name="assignment_return"></ion-icon>\n        </button>\n        <button ion-button icon-only large block clear>\n          <ion-icon md-name="shopping_basket"></ion-icon>\n        </button>\n        <button ion-button icon-only large block clear>\n          <ion-icon md-name="show_chart"></ion-icon>\n        </button>\n        <button ion-button icon-only large block clear>\n          <ion-icon md-name="location_city"></ion-icon>\n        </button>\n        <button ion-button icon-only large block clear>\n          <ion-icon md-name="attach_money"></ion-icon>\n        </button>\n        <button ion-button icon-only large block clear>\n          <ion-icon md-name="check_box"></ion-icon>\n        </button>\n      </ion-list>\n    </ion-col>\n    <ion-col col-11>\n        <ion-nav #mainSpace [root]="rootPage1"></ion-nav>\n    </ion-col>\n  </ion-row>\n</ion-content>`/*ion-inline-end:"/home/vxsrini/Development/CEMobility/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__["a" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__["a" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Summary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet_markercluster__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet_markercluster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_leaflet_markercluster__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_pouchdb__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_pouchdb_adapter_cordova_sqlite__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_pouchdb_adapter_cordova_sqlite___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_pouchdb_adapter_cordova_sqlite__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the Summary page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Summary = (function () {
    function Summary(navCtrl, navParams) {
        //this.addGraph();
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showFilter = false;
        this.listObj = {
            "header": [
                {
                    "group": "Technology Type",
                    open: true,
                    "sub_groups": [
                        {
                            value: "5G",
                            type: "boolean",
                            type_values: ["true", "false"],
                            current_value: "true"
                        },
                        {
                            value: "4G",
                            type: "boolean",
                            type_values: ["true", "false"],
                            current_value: "true"
                        }
                    ]
                },
                {
                    "group": "Site Type",
                    open: false,
                    "sub_groups": [
                        {
                            value: "Micro",
                            type: "boolean",
                            type_values: ["true", "false"],
                            current_value: "true"
                        },
                        {
                            value: "Macro",
                            type: "boolean",
                            type_values: ["true", "false"],
                            current_value: "true"
                        },
                        {
                            value: "In Building",
                            type: "boolean",
                            type_values: ["true", "false"],
                            current_value: "true"
                        }
                    ]
                },
                {
                    "group": "Build Type",
                    open: false,
                    "sub_groups": [
                        {
                            value: "New",
                            type: "boolean",
                            type_values: ["true", "false"],
                            current_value: "true"
                        },
                        {
                            value: "Convertion",
                            type: "boolean",
                            type_values: ["true", "false"],
                            current_value: "true"
                        }
                    ]
                }
            ],
            "data": [{}]
        };
        this.bounds = [
            [39.417703, -125.711319],
            [39.621102, -69.900772] // Northeast coordinates
        ];
        __WEBPACK_IMPORTED_MODULE_6_pouchdb__["plugin"](__WEBPACK_IMPORTED_MODULE_7_pouchdb_adapter_cordova_sqlite___default.a);
        this._db = new __WEBPACK_IMPORTED_MODULE_6_pouchdb__('birthdays.db', { adapter: 'cordova-sqlite' });
    }
    Summary.prototype.loadmap = function () {
        this.mymap = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.map('map', { maxBounds: this.bounds }).fitBounds(this.bounds);
        __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            id: 'mapbox.streets',
            maxBounds: this.bounds
        }).addTo(this.mymap);
        /*   L.marker([39.809734, -98.55562]).addTo(this.mymap)
             .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
       
           var popup = L.popup(); */
    };
    Summary.prototype.filterButtonHandler = function () {
        console.log("Filter Button Handler Involked");
        this.showFilter = !this.showFilter;
    };
    Summary.prototype.toggleSection = function (item) {
        /*
        this.listObj.header.forEach(element => {
          if (element.open) {
            element.open = !element.open;
          }
        });*/
        item.open = !item.open;
    };
    Summary.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Summary');
        this.loadmap();
        this.barChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                        label: '# of Sites',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 206, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(153, 102, 255)',
                            'rgb(255, 159, 64)'
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
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], Summary.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], Summary.prototype, "mapContainer", void 0);
    Summary = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-summary',template:/*ion-inline-start:"/home/vxsrini/Development/CEMobility/src/pages/summary/summary.html"*/`<div id="map" class="geomap">\n    <div id="filter_button">\n      <button ion-button small color="light" id="filter_button" (click)="filterButtonHandler()">\n        <ion-icon md-name="star"></ion-icon>\n      </button>\n    </div>\n  \n    <div *ngIf="showFilter" id="selector_menu">\n  \n      <ion-content>\n        <ion-list *ngFor="let item of listObj.header" class="accordion-list">\n          <ion-list-header>\n            <button ion-item (click)="toggleSection(item)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n              <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n              <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n              {{item.group}}\n            </button>\n          </ion-list-header>\n  \n          <div *ngIf="item.open">\n            <ion-item id="filter_items" *ngFor="let sub_item of item.sub_groups" class="item-data">\n              <ion-avatar item-left>\n              </ion-avatar>\n              <ion-label>{{sub_item.value}}</ion-label>\n              <ion-checkbox [(ngModel)]="sub_item.current_value" item-right *ngIf="sub_item.type==\'boolean\'"></ion-checkbox>\n            </ion-item>\n          </div>\n  \n        </ion-list>\n      </ion-content>\n    </div>\n  </div>\n  \n  <ion-card class="data-graph">\n    <ion-card-header>\n      Bar Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barCanvas></canvas>\n    </ion-card-content>\n  </ion-card>`/*ion-inline-end:"/home/vxsrini/Development/CEMobility/src/pages/summary/summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__["a" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__["a" /* NavParams */]])
    ], Summary);
    return Summary;
}());

//# sourceMappingURL=summary.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(376);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_play_station_play_station__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_media__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_one_fiber_dashboard_one_fiber_dashboard__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic2_material_icons__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_summary_summary__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_play_station_play_station__["a" /* PlayStation */],
                __WEBPACK_IMPORTED_MODULE_9__pages_one_fiber_dashboard_one_fiber_dashboard__["a" /* OneFiberDashboard */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_summary_summary__["a" /* Summary */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/one-fiber-dashboard/one-fiber-dashboard.module#OneFiberDashboardModule', name: 'OneFiberDashboard', segment: 'one-fiber-dashboard', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10_ionic2_material_icons__["a" /* MaterialIconsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_play_station_play_station__["a" /* PlayStation */],
                __WEBPACK_IMPORTED_MODULE_9__pages_one_fiber_dashboard_one_fiber_dashboard__["a" /* OneFiberDashboard */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_summary_summary__["a" /* Summary */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_media__["a" /* Media */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__["a" /* Toast */],
                // MediaObject,
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        /*
        this.sqlite = new SQLite();
        this.sqlite.create({
          name: 'yodio.db',
          location: 'default'
        }).then((db: SQLiteObject) => {
          this.db = db;
        }, (error) => { // This error is for Create database. If unsuccessful, the app should shutdown.
          console.error("Unable to open database", error);
        });*/
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'OneFiber Dashboard', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Site Survey', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            //this.db.executeSql('CREATE TABLE IF NOT EXISTS yodio_languages (id INTEGER PRIMARY KEY AUTOINCREMENT, language TEXT, logo TEXT)', {});
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'my-app',template:/*ion-inline-start:"/home/vxsrini/Development/CEMobility/src/app/app.html"*/`<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-navbar color="danger">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title text-left>CoFEE Engineering</ion-title>\n    </ion-navbar>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"/home/vxsrini/Development/CEMobility/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 217,
	"./af.js": 217,
	"./ar": 218,
	"./ar-dz": 219,
	"./ar-dz.js": 219,
	"./ar-kw": 220,
	"./ar-kw.js": 220,
	"./ar-ly": 221,
	"./ar-ly.js": 221,
	"./ar-ma": 222,
	"./ar-ma.js": 222,
	"./ar-sa": 223,
	"./ar-sa.js": 223,
	"./ar-tn": 224,
	"./ar-tn.js": 224,
	"./ar.js": 218,
	"./az": 225,
	"./az.js": 225,
	"./be": 226,
	"./be.js": 226,
	"./bg": 227,
	"./bg.js": 227,
	"./bm": 228,
	"./bm.js": 228,
	"./bn": 229,
	"./bn.js": 229,
	"./bo": 230,
	"./bo.js": 230,
	"./br": 231,
	"./br.js": 231,
	"./bs": 232,
	"./bs.js": 232,
	"./ca": 233,
	"./ca.js": 233,
	"./cs": 234,
	"./cs.js": 234,
	"./cv": 235,
	"./cv.js": 235,
	"./cy": 236,
	"./cy.js": 236,
	"./da": 237,
	"./da.js": 237,
	"./de": 238,
	"./de-at": 239,
	"./de-at.js": 239,
	"./de-ch": 240,
	"./de-ch.js": 240,
	"./de.js": 238,
	"./dv": 241,
	"./dv.js": 241,
	"./el": 242,
	"./el.js": 242,
	"./en-au": 243,
	"./en-au.js": 243,
	"./en-ca": 244,
	"./en-ca.js": 244,
	"./en-gb": 245,
	"./en-gb.js": 245,
	"./en-ie": 246,
	"./en-ie.js": 246,
	"./en-il": 247,
	"./en-il.js": 247,
	"./en-nz": 248,
	"./en-nz.js": 248,
	"./eo": 249,
	"./eo.js": 249,
	"./es": 250,
	"./es-do": 251,
	"./es-do.js": 251,
	"./es-us": 252,
	"./es-us.js": 252,
	"./es.js": 250,
	"./et": 253,
	"./et.js": 253,
	"./eu": 254,
	"./eu.js": 254,
	"./fa": 255,
	"./fa.js": 255,
	"./fi": 256,
	"./fi.js": 256,
	"./fo": 257,
	"./fo.js": 257,
	"./fr": 258,
	"./fr-ca": 259,
	"./fr-ca.js": 259,
	"./fr-ch": 260,
	"./fr-ch.js": 260,
	"./fr.js": 258,
	"./fy": 261,
	"./fy.js": 261,
	"./gd": 262,
	"./gd.js": 262,
	"./gl": 263,
	"./gl.js": 263,
	"./gom-latn": 264,
	"./gom-latn.js": 264,
	"./gu": 265,
	"./gu.js": 265,
	"./he": 266,
	"./he.js": 266,
	"./hi": 267,
	"./hi.js": 267,
	"./hr": 268,
	"./hr.js": 268,
	"./hu": 269,
	"./hu.js": 269,
	"./hy-am": 270,
	"./hy-am.js": 270,
	"./id": 271,
	"./id.js": 271,
	"./is": 272,
	"./is.js": 272,
	"./it": 273,
	"./it.js": 273,
	"./ja": 274,
	"./ja.js": 274,
	"./jv": 275,
	"./jv.js": 275,
	"./ka": 276,
	"./ka.js": 276,
	"./kk": 277,
	"./kk.js": 277,
	"./km": 278,
	"./km.js": 278,
	"./kn": 279,
	"./kn.js": 279,
	"./ko": 280,
	"./ko.js": 280,
	"./ky": 281,
	"./ky.js": 281,
	"./lb": 282,
	"./lb.js": 282,
	"./lo": 283,
	"./lo.js": 283,
	"./lt": 284,
	"./lt.js": 284,
	"./lv": 285,
	"./lv.js": 285,
	"./me": 286,
	"./me.js": 286,
	"./mi": 287,
	"./mi.js": 287,
	"./mk": 288,
	"./mk.js": 288,
	"./ml": 289,
	"./ml.js": 289,
	"./mr": 290,
	"./mr.js": 290,
	"./ms": 291,
	"./ms-my": 292,
	"./ms-my.js": 292,
	"./ms.js": 291,
	"./mt": 293,
	"./mt.js": 293,
	"./my": 294,
	"./my.js": 294,
	"./nb": 295,
	"./nb.js": 295,
	"./ne": 296,
	"./ne.js": 296,
	"./nl": 297,
	"./nl-be": 298,
	"./nl-be.js": 298,
	"./nl.js": 297,
	"./nn": 299,
	"./nn.js": 299,
	"./pa-in": 300,
	"./pa-in.js": 300,
	"./pl": 301,
	"./pl.js": 301,
	"./pt": 302,
	"./pt-br": 303,
	"./pt-br.js": 303,
	"./pt.js": 302,
	"./ro": 304,
	"./ro.js": 304,
	"./ru": 305,
	"./ru.js": 305,
	"./sd": 306,
	"./sd.js": 306,
	"./se": 307,
	"./se.js": 307,
	"./si": 308,
	"./si.js": 308,
	"./sk": 309,
	"./sk.js": 309,
	"./sl": 310,
	"./sl.js": 310,
	"./sq": 311,
	"./sq.js": 311,
	"./sr": 312,
	"./sr-cyrl": 313,
	"./sr-cyrl.js": 313,
	"./sr.js": 312,
	"./ss": 314,
	"./ss.js": 314,
	"./sv": 315,
	"./sv.js": 315,
	"./sw": 316,
	"./sw.js": 316,
	"./ta": 317,
	"./ta.js": 317,
	"./te": 318,
	"./te.js": 318,
	"./tet": 319,
	"./tet.js": 319,
	"./tg": 320,
	"./tg.js": 320,
	"./th": 321,
	"./th.js": 321,
	"./tl-ph": 322,
	"./tl-ph.js": 322,
	"./tlh": 323,
	"./tlh.js": 323,
	"./tr": 324,
	"./tr.js": 324,
	"./tzl": 325,
	"./tzl.js": 325,
	"./tzm": 326,
	"./tzm-latn": 327,
	"./tzm-latn.js": 327,
	"./tzm.js": 326,
	"./ug-cn": 328,
	"./ug-cn.js": 328,
	"./uk": 329,
	"./uk.js": 329,
	"./ur": 330,
	"./ur.js": 330,
	"./uz": 331,
	"./uz-latn": 332,
	"./uz-latn.js": 332,
	"./uz.js": 331,
	"./vi": 333,
	"./vi.js": 333,
	"./x-pseudo": 334,
	"./x-pseudo.js": 334,
	"./yo": 335,
	"./yo.js": 335,
	"./zh-cn": 336,
	"./zh-cn.js": 336,
	"./zh-hk": 337,
	"./zh-hk.js": 337,
	"./zh-tw": 338,
	"./zh-tw.js": 338
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 456;

/***/ })

},[352]);
//# sourceMappingURL=main.js.map