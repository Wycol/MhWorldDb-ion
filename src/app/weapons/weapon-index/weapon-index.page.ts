import { Component, OnInit, Sanitizer } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MonstersService } from "src/app/monsters/monsters.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-weapon-index",
  templateUrl: "./weapon-index.page.html",
  styleUrls: ["./weapon-index.page.scss"],
})
export class WeaponIndexPage implements OnInit {
  routeValue: string;
  weapons_array = [
    {
      id: "Great sword",
      desc:
        '<strong>Great Sword</strong> (大剣 <em>dai ken</em>, "big sword")is a weapon category in <strong>Monster Hunter World</strong> (MHW).',
      subDesc:
        "<em>The great sword has a long reach and powerful attacks. Because  its sheer weight limits the speed of your movement and attacks,  it lends itself well to hit-and-run combat tactics.</em>",
      trait: [
        "Large, heavy sword that has the highest damage per hit of all the weapons.",
        "It is capable of quickly blocking at the expense of sharpness.",
        "Has powerful charge attacks.",
      ],
      video: this.sani.bypassSecurityTrustResourceUrl(
        "https://www.youtube.com/embed/UnsgxCc7LZY"
      ),
      adv: [
        "Highest damage per hit in the game",
        "Great range",
        "High stagger multipliers make part breaks and flinching easier",
        "Can be used to guard, although it's very sharpness consumi",
        "Very low sharpness consumption if you're not guarding",
      ],
      disadv: [
        "Poor mobility with the weapon unsheathed",
        "Charged attacks are slow to wind up, leaving hunters open to attack",
        "Missing a big hit means missing a lot of damage",
      ],
    },{
      id: "Long sword",
      desc:
        '<strong>Long sword</strong> (大剣 <em>dai ken</em>, "big sword")is a weapon category in <strong>Monster Hunter World</strong> (MHW).',
      subDesc:
        "<em>The great sword has a long reach and powerful attacks. Because  its sheer weight limits the speed of your movement and attacks,  it lends itself well to hit-and-run combat tactics.</em>",
      trait: [
        "Large, heavy sword that has the highest damage per hit of all the weapons.",
        "It is capable of quickly blocking at the expense of sharpness.",
        "Has powerful charge attacks.",
      ],
      video: this.sani.bypassSecurityTrustResourceUrl(
        "https://www.youtube.com/embed/UnsgxCc7LZY"
      ),
      adv: [
        "Highest damage per hit in the game",
        "Great range",
        "High stagger multipliers make part breaks and flinching easier",
        "Can be used to guard, although it's very sharpness consumi",
        "Very low sharpness consumption if you're not guarding",
      ],
      disadv: [
        "Poor mobility with the weapon unsheathed",
        "Charged attacks are slow to wind up, leaving hunters open to attack",
        "Missing a big hit means missing a lot of damage",
      ],
    },
  ];
  selected_weapon = {
    id: "",
    desc: "",
    subDesc: "",
    trait: [],
    video: this.sani.bypassSecurityTrustResourceUrl(""),
    adv: [],
    disadv: [],
  };

  constructor(
    private activeRoute: ActivatedRoute,
    private monsterSrv: MonstersService,
    private sani: DomSanitizer
  ) {}

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((routeData) => {
      this.routeValue = this.monsterSrv.humanize(routeData.get("id"));
      console.log(this.routeValue)
      if (
        this.weapons_array.filter((weapon) => weapon.id === this.routeValue)
          .length > 0
      ) {
        this.selected_weapon = this.weapons_array.find(
          (x) => x.id === this.routeValue
        );
      }
    });
  }
}
