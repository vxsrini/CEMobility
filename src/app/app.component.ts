import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { PlayStation } from '../pages/play-station/play-station';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneFiberDashboard } from '../pages/one-fiber-dashboard/one-fiber-dashboard';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { HomePage } from '../pages/home/home';




@Component({
  selector: 'my-app',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = HomePage;
  pages: Array<{title: string, component: any}>;


  private sqlite: SQLite;
  private db: any;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
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
      { title: 'OneFiber Dashboard', component: HomePage },
      { title: 'Site Survey', component: HomePage }
    ];
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //this.db.executeSql('CREATE TABLE IF NOT EXISTS yodio_languages (id INTEGER PRIMARY KEY AUTOINCREMENT, language TEXT, logo TEXT)', {});
    });
  }
}
