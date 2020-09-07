import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Monsters',
      url: '/monsters',
      icon: '/assets/ion-custom-icons/monstericon.png'
    },
    {
      title: 'Weapons',
      url: '/weapons',
      icon: '/assets/images/great_sword.png'
    },
    {
      title: 'Armors',
      url: '/armors',
      icon: '/assets/images/armor.png',
    },
    {
      title: 'Archived',
      url: '/folder/Archived',
      icon: '/assets/ion-custom-icons/monstericon.png'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
  }
}
