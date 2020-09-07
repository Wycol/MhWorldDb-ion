import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { IonSlides, IonSegmentButton, NavController, AlertController } from '@ionic/angular';
import { MonstersService } from '../monsters.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Monster } from '../monster.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit, OnDestroy {
  loading = false;
  loadedMonster: Monster;
  private monSub: Subscription;

  segment = 1;
  selectedSlide: any;

  constructor(private mSrv: MonstersService, private navCtrl: NavController, private actRoute: ActivatedRoute, private router: Router, private alertCtrl: AlertController) { }
  ngOnDestroy(): void {
    if(this.monSub){
      this.monSub.unsubscribe();
    }
  }

  ngOnInit() {

    this.monSub = this.actRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has("id")) {
        this.navCtrl.navigateBack("/monsters");
        return;
      }
      this.loading = true;
      this.mSrv.getMonster(paramMap.get("id")).subscribe( monster => {
        this.loadedMonster = monster;
        this.loading = false;
        console.log(monster);
        
      },
      (error) => {
        this.alertCtrl
          .create({
            header: "Error ocurred",
            message: "Could not load monster.",
            buttons: [
              {
                text: "Okay",
                handler: () => {
                  this.router.navigate(["monsters"]);
                },
              },
            ],
          })
          .then((alertEl) => {
            alertEl.present();
          });
      });
  });
}

async changeSlide(slides : IonSlides) { 
  this.selectedSlide = slides;
  slides.getActiveIndex().then(selectedIndex => {
    this.segment = selectedIndex;
  })
}

async segmentChanged(ev){
  await this.selectedSlide.slideTo(this.segment)
}

}
