import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-weapons",
  templateUrl: "./weapons.page.html",
  styleUrls: ["./weapons.page.scss"],
})
export class WeaponsPage implements OnInit {
  loading = false;
  weapon_types = [
    "Great Sword",
    "Long Sword",
    "Sword and Shield",
    "Dual Blades",
    "Hammer",
    "Hunting Horn",
    "Lance",
    "Gunlance",
    "Switch Axe",
    "Charge Blade",
    "Insect Glaive",
    "Light Bowgun",
    "Heavy Bowgun",
    "Bow",
  ];

  constructor() {}

  ngOnInit() {}
}
