import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { MonstersService } from "./monsters.service";
import { Subscription } from "rxjs";
import { Monster } from "./monster.model";
import { SegmentChangeEventDetail } from "@ionic/core";
import { IonSlides, IonSegment, IonSegmentButton } from "@ionic/angular";

@Component({
  selector: "app-monsters",
  templateUrl: "./monsters.page.html",
  styleUrls: ["./monsters.page.scss"],
})
export class MonstersPage implements OnInit, OnDestroy {
  toggle = false;
  searching = false;
  loadedMonsters: Monster[];
  filteredMonsters: Monster[];
  private monSub: Subscription;
  segment = 0;
  selectedSlide: any;
  smallMonsters: Monster[];
  largeMonsters: Monster[];
  loading = false;



  constructor(private mSrv: MonstersService) { }
  ngOnDestroy() {
    if (this.monSub) {
      this.monSub.unsubscribe();
    }
  }

  ngOnInit() {
    this.loading = true;
    this.monSub = this.mSrv.fetchMonsters().subscribe((monsters) => {
      this.loadedMonsters = monsters;
      this.largeMonsters = this.loadedMonsters.filter(
        (monster) => monster.type === "large"
      );
      this.smallMonsters = this.loadedMonsters.filter(
        (monster) => monster.type === "small"
      );
      this.loading = false;
    });
  }

  async changeSlide(slides: IonSlides) {
    this.selectedSlide = slides;
    slides.getActiveIndex().then(selectedIndex => {
      this.segment = selectedIndex;
    })
  }

  async segmentChanged(ev) {
    await this.selectedSlide.slideTo(this.segment)
  }
  changeToggle() {
    this.toggle = !this.toggle;
    this.searching = false;
  }

  filterList(ev) {
    let searchTerm = ev.srcElement.value;
    if (searchTerm.length > 0) {
      this.searching = true;
      this.filteredMonsters = this.loadedMonsters.filter(monsters => {
          return (monsters.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      });
    }

  }
  unFilter() {
    this.searching = false
  }
}
