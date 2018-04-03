webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneFiberDashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__play_station_play_station__ = __webpack_require__(154);
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

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/one-fiber-dashboard/one-fiber-dashboard.module": [
		284,
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
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayStation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(39);
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

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__one_fiber_dashboard_one_fiber_dashboard__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__summary_summary__ = __webpack_require__(199);
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

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Summary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_google_charts__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_leaflet__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_leaflet_markercluster__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_leaflet_markercluster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_leaflet_markercluster__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import PouchDB from 'pouchdb';
//import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';
/**
 * Generated class for the Summary page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Summary = (function () {
    function Summary(navCtrl, navParams, http) {
        //this.addGraph();
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.showFilter = false;
        this.bounds = [
            [39.417703, -125.711319],
            [39.621102, -69.900772] // Northeast coordinates
        ];
        __WEBPACK_IMPORTED_MODULE_4_google_charts__["a" /* GoogleCharts */].load(this.drawChart);
        this.http.get('http://vxsrini-desktop:3000/getFilterForSummary').map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.listObj = data;
        }, function (err) {
            console.log("Error Initiating - Could not obtain necessary data");
        });
        /*   PouchDB.plugin(cordovaSqlitePlugin);
           this._db = new PouchDB('cofee.db', { adapter: 'cordova-sqlite' }); */
    }
    Summary.prototype.loadmap = function () {
        this.mymap = __WEBPACK_IMPORTED_MODULE_6_leaflet___default.a.map('map', { maxBounds: this.bounds }).fitBounds(this.bounds);
        __WEBPACK_IMPORTED_MODULE_6_leaflet___default.a.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
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
        /*this.http.get('http://vxsrini-desktop:3000/getDataForSites').map(res => res.json()).subscribe(
          data => {
            console.log(JSON.stringify(data));
            this.barChart = new Chart(this.barCanvas.nativeElement, {
              "type": "bar",
              "data": data
            });
    
            this.drawChart();
          },
          err => {
            console.log("Error Initiating - Could not obtain necessary data for sites");
          }
        );*/
        this.drawChart();
    };
    Summary.prototype.drawChart = function () {
        // Standard google charts functionality is available as GoogleCharts.api after load
        var data = __WEBPACK_IMPORTED_MODULE_4_google_charts__["a" /* GoogleCharts */].api.visualization.arrayToDataTable([
            ['Chart thing', 'Chart amount'],
            ['Lorem ipsum', 60],
            ['Dolor sit', 22],
            ['Sit amet', 18]
        ]);
        var pie_1_chart = new __WEBPACK_IMPORTED_MODULE_4_google_charts__["a" /* GoogleCharts */].api.visualization.PieChart(document.getElementById('chart1'));
        pie_1_chart.draw(data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], Summary.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('chart1'),
        __metadata("design:type", Object)
    ], Summary.prototype, "chart1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], Summary.prototype, "mapContainer", void 0);
    Summary = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-summary',template:/*ion-inline-start:"/home/vxsrini/Development/CEMobility/src/pages/summary/summary.html"*/`<div id="map" class="geomap">\n    <div id="filter_button">\n      <button ion-button small color="light" id="filter_button" (click)="filterButtonHandler()">\n        <ion-icon md-name="star"></ion-icon>\n      </button>\n    </div>\n  \n    <div *ngIf="showFilter" id="selector_menu">\n  \n      <ion-content>\n        <ion-list *ngFor="let item of listObj.header" class="accordion-list">\n          <ion-list-header>\n            <button ion-item (click)="toggleSection(item)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n              <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n              <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n              {{item.group}}\n            </button>\n          </ion-list-header>\n  \n          <div *ngIf="item.open">\n            <ion-item id="filter_items" *ngFor="let sub_item of item.sub_groups" class="item-data">\n              <ion-avatar item-left>\n              </ion-avatar>\n              <ion-label>{{sub_item.value}}</ion-label>\n              <ion-checkbox [(ngModel)]="sub_item.current_value" item-right *ngIf="sub_item.type==\'boolean\'"></ion-checkbox>\n            </ion-item>\n          </div>\n  \n        </ion-list>\n      </ion-content>\n    </div>\n  </div>\n  \n  <ion-card class="data-graph">\n    <ion-card-header>\n      Bar Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barCanvas></canvas>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="data-graph">\n    <ion-card-header>\n      Google Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas id="chart1"></canvas>\n    </ion-card-content>\n  </ion-card>`/*ion-inline-end:"/home/vxsrini/Development/CEMobility/src/pages/summary/summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__["a" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], Summary);
    return Summary;
}());

//# sourceMappingURL=summary.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_play_station_play_station__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_media__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_toast__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_one_fiber_dashboard_one_fiber_dashboard__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic2_material_icons__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_summary_summary__ = __webpack_require__(199);
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
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_play_station_play_station__["a" /* PlayStation */],
                __WEBPACK_IMPORTED_MODULE_10__pages_one_fiber_dashboard_one_fiber_dashboard__["a" /* OneFiberDashboard */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_summary_summary__["a" /* Summary */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/one-fiber-dashboard/one-fiber-dashboard.module#OneFiberDashboardModule', name: 'OneFiberDashboard', segment: 'one-fiber-dashboard', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11_ionic2_material_icons__["a" /* MaterialIconsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_play_station_play_station__["a" /* PlayStation */],
                __WEBPACK_IMPORTED_MODULE_10__pages_one_fiber_dashboard_one_fiber_dashboard__["a" /* OneFiberDashboard */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_summary_summary__["a" /* Summary */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_media__["a" /* Media */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_toast__["a" /* Toast */],
                // MediaObject,
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
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

/***/ })

},[201]);
//# sourceMappingURL=main.js.map