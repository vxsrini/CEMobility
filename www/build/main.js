webpackJsonp([1],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneFiberDashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__play_station_play_station__ = __webpack_require__(161);
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

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/one-fiber-dashboard/one-fiber-dashboard.module": [
		464,
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
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayStation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(46);
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

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__one_fiber_dashboard_one_fiber_dashboard__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__summary_summary__ = __webpack_require__(205);
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

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Summary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet_markercluster__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet_markercluster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_leaflet_markercluster__);
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
            ],
            "data": [{}]
        };
        this.bounds = [
            [39.417703, -125.711319],
            [39.621102, -69.900772] // Northeast coordinates
        ];
        //this.addGraph();
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
        this.listObj.header.forEach(function (element) {
            if (element.open) {
                element.open = !element.open;
            }
        });
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
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], Summary.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], Summary.prototype, "mapContainer", void 0);
    Summary = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-summary',template:/*ion-inline-start:"/home/vxsrini/Development/CEMobility/src/pages/summary/summary.html"*/`<div id="map" class="geomap">\n    <div id="filter_button">\n      <button ion-button small color="light" id="filter_button" (click)="filterButtonHandler()">\n        <ion-icon md-name="star"></ion-icon>\n      </button>\n    </div>\n  \n    <div *ngIf="showFilter" id="selector_menu">\n  \n      <ion-content>\n        <ion-list *ngFor="let item of listObj.header" class="accordion-list">\n          <ion-list-header>\n            <button ion-item (click)="toggleSection(item)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n              <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n              <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n              {{item.group}}\n            </button>\n          </ion-list-header>\n  \n          <div *ngIf="item.open">\n            <ion-item id="filter_items" *ngFor="let sub_item of item.sub_groups">\n              <ion-avatar item-left>\n              </ion-avatar>\n              <ion-label>{{sub_item.value}}</ion-label>\n              <ion-checkbox [(ngModel)]="sub_item.current_value" item-right *ngIf="sub_item.type==\'boolean\'"></ion-checkbox>\n            </ion-item>\n          </div>\n  \n        </ion-list>\n      </ion-content>\n    </div>\n  </div>\n  \n  <ion-card class="card">\n    <ion-card-header>\n      Bar Chart\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barCanvas></canvas>\n    </ion-card-content>\n  </ion-card>`/*ion-inline-end:"/home/vxsrini/Development/CEMobility/src/pages/summary/summary.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__["a" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__["a" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__["a" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__["a" /* NavParams */]) === "function" && _c || Object])
    ], Summary);
    return Summary;
    var _a, _b, _c;
}());

//# sourceMappingURL=summary.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(359);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_play_station_play_station__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_media__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_toast__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_one_fiber_dashboard_one_fiber_dashboard__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic2_material_icons__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_summary_summary__ = __webpack_require__(205);
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

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(204);
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

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 212,
	"./af.js": 212,
	"./ar": 213,
	"./ar-dz": 214,
	"./ar-dz.js": 214,
	"./ar-kw": 215,
	"./ar-kw.js": 215,
	"./ar-ly": 216,
	"./ar-ly.js": 216,
	"./ar-ma": 217,
	"./ar-ma.js": 217,
	"./ar-sa": 218,
	"./ar-sa.js": 218,
	"./ar-tn": 219,
	"./ar-tn.js": 219,
	"./ar.js": 213,
	"./az": 220,
	"./az.js": 220,
	"./be": 221,
	"./be.js": 221,
	"./bg": 222,
	"./bg.js": 222,
	"./bm": 223,
	"./bm.js": 223,
	"./bn": 224,
	"./bn.js": 224,
	"./bo": 225,
	"./bo.js": 225,
	"./br": 226,
	"./br.js": 226,
	"./bs": 227,
	"./bs.js": 227,
	"./ca": 228,
	"./ca.js": 228,
	"./cs": 229,
	"./cs.js": 229,
	"./cv": 230,
	"./cv.js": 230,
	"./cy": 231,
	"./cy.js": 231,
	"./da": 232,
	"./da.js": 232,
	"./de": 233,
	"./de-at": 234,
	"./de-at.js": 234,
	"./de-ch": 235,
	"./de-ch.js": 235,
	"./de.js": 233,
	"./dv": 236,
	"./dv.js": 236,
	"./el": 237,
	"./el.js": 237,
	"./en-au": 238,
	"./en-au.js": 238,
	"./en-ca": 239,
	"./en-ca.js": 239,
	"./en-gb": 240,
	"./en-gb.js": 240,
	"./en-ie": 241,
	"./en-ie.js": 241,
	"./en-il": 242,
	"./en-il.js": 242,
	"./en-nz": 243,
	"./en-nz.js": 243,
	"./eo": 244,
	"./eo.js": 244,
	"./es": 245,
	"./es-do": 246,
	"./es-do.js": 246,
	"./es-us": 247,
	"./es-us.js": 247,
	"./es.js": 245,
	"./et": 248,
	"./et.js": 248,
	"./eu": 249,
	"./eu.js": 249,
	"./fa": 250,
	"./fa.js": 250,
	"./fi": 251,
	"./fi.js": 251,
	"./fo": 252,
	"./fo.js": 252,
	"./fr": 253,
	"./fr-ca": 254,
	"./fr-ca.js": 254,
	"./fr-ch": 255,
	"./fr-ch.js": 255,
	"./fr.js": 253,
	"./fy": 256,
	"./fy.js": 256,
	"./gd": 257,
	"./gd.js": 257,
	"./gl": 258,
	"./gl.js": 258,
	"./gom-latn": 259,
	"./gom-latn.js": 259,
	"./gu": 260,
	"./gu.js": 260,
	"./he": 261,
	"./he.js": 261,
	"./hi": 262,
	"./hi.js": 262,
	"./hr": 263,
	"./hr.js": 263,
	"./hu": 264,
	"./hu.js": 264,
	"./hy-am": 265,
	"./hy-am.js": 265,
	"./id": 266,
	"./id.js": 266,
	"./is": 267,
	"./is.js": 267,
	"./it": 268,
	"./it.js": 268,
	"./ja": 269,
	"./ja.js": 269,
	"./jv": 270,
	"./jv.js": 270,
	"./ka": 271,
	"./ka.js": 271,
	"./kk": 272,
	"./kk.js": 272,
	"./km": 273,
	"./km.js": 273,
	"./kn": 274,
	"./kn.js": 274,
	"./ko": 275,
	"./ko.js": 275,
	"./ky": 276,
	"./ky.js": 276,
	"./lb": 277,
	"./lb.js": 277,
	"./lo": 278,
	"./lo.js": 278,
	"./lt": 279,
	"./lt.js": 279,
	"./lv": 280,
	"./lv.js": 280,
	"./me": 281,
	"./me.js": 281,
	"./mi": 282,
	"./mi.js": 282,
	"./mk": 283,
	"./mk.js": 283,
	"./ml": 284,
	"./ml.js": 284,
	"./mr": 285,
	"./mr.js": 285,
	"./ms": 286,
	"./ms-my": 287,
	"./ms-my.js": 287,
	"./ms.js": 286,
	"./mt": 288,
	"./mt.js": 288,
	"./my": 289,
	"./my.js": 289,
	"./nb": 290,
	"./nb.js": 290,
	"./ne": 291,
	"./ne.js": 291,
	"./nl": 292,
	"./nl-be": 293,
	"./nl-be.js": 293,
	"./nl.js": 292,
	"./nn": 294,
	"./nn.js": 294,
	"./pa-in": 295,
	"./pa-in.js": 295,
	"./pl": 296,
	"./pl.js": 296,
	"./pt": 297,
	"./pt-br": 298,
	"./pt-br.js": 298,
	"./pt.js": 297,
	"./ro": 299,
	"./ro.js": 299,
	"./ru": 300,
	"./ru.js": 300,
	"./sd": 301,
	"./sd.js": 301,
	"./se": 302,
	"./se.js": 302,
	"./si": 303,
	"./si.js": 303,
	"./sk": 304,
	"./sk.js": 304,
	"./sl": 305,
	"./sl.js": 305,
	"./sq": 306,
	"./sq.js": 306,
	"./sr": 307,
	"./sr-cyrl": 308,
	"./sr-cyrl.js": 308,
	"./sr.js": 307,
	"./ss": 309,
	"./ss.js": 309,
	"./sv": 310,
	"./sv.js": 310,
	"./sw": 311,
	"./sw.js": 311,
	"./ta": 312,
	"./ta.js": 312,
	"./te": 313,
	"./te.js": 313,
	"./tet": 314,
	"./tet.js": 314,
	"./tg": 315,
	"./tg.js": 315,
	"./th": 316,
	"./th.js": 316,
	"./tl-ph": 317,
	"./tl-ph.js": 317,
	"./tlh": 318,
	"./tlh.js": 318,
	"./tr": 319,
	"./tr.js": 319,
	"./tzl": 320,
	"./tzl.js": 320,
	"./tzm": 321,
	"./tzm-latn": 322,
	"./tzm-latn.js": 322,
	"./tzm.js": 321,
	"./ug-cn": 323,
	"./ug-cn.js": 323,
	"./uk": 324,
	"./uk.js": 324,
	"./ur": 325,
	"./ur.js": 325,
	"./uz": 326,
	"./uz-latn": 327,
	"./uz-latn.js": 327,
	"./uz.js": 326,
	"./vi": 328,
	"./vi.js": 328,
	"./x-pseudo": 329,
	"./x-pseudo.js": 329,
	"./yo": 330,
	"./yo.js": 330,
	"./zh-cn": 331,
	"./zh-cn.js": 331,
	"./zh-hk": 332,
	"./zh-hk.js": 332,
	"./zh-tw": 333,
	"./zh-tw.js": 333
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
webpackContext.id = 439;

/***/ })

},[335]);
//# sourceMappingURL=main.js.map