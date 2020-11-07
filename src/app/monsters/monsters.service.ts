import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { take, map, tap, delay, switchMap } from "rxjs/operators";
import { Monster } from "./monster.model";
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { MonsterWeakness } from './monster_weakness.model';
import { MonsterAilments } from './monster_ailments.model';

interface MonsterData {
  id: string;
  name: string;
  type: string;
  species: string;
  description: string;
  /*   elements:	Array<ElementType>
  ailments:	Array<Ailment>
  locations:	Array<Location>
  resistances:	Array<MonsterResistance>/**/
  weaknesses:	[MonsterWeakness];
  ailments: [MonsterAilments];
  
/*   rewards:	Array<MonsterReward>
 */}

@Injectable({
  providedIn: "root",
})
export class MonstersService {
  private _monsters = new BehaviorSubject<Monster[]>([]);

  constructor(private http: HttpClient) {}

  getMonster(id: string) {
    return this.http
      .get<MonsterData>(`https://mhw-db.com/monsters/${id}`)
      .pipe(
        map((monster) => {
          return new Monster(
            id,
            monster.name,
            monster.species,
            monster.type,
            monster.name.replace(/ /g, "_"),
            monster.description,
            monster.weaknesses,
            monster.ailments
          );
        })
      );
  }

  humanize(str: string) {
    return str
        .replace(/^[\s_]+|[\s_]+$/g, '')
        .replace(/[_\s]+/g, ' ')
        .replace(/^[a-z]/, function(m) { return m.toUpperCase(); });
  }

  fetchMonsters() {
    return this.http
      .get<{ [key: string]: MonsterData }>(`https://mhw-db.com/monsters`)
      .pipe(
        map((resData) => {
          const monsters = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              let capName =
                resData[key].name[0].toUpperCase() + resData[key].name.slice(1);
              monsters.push(
                new Monster(
                  resData[key].id,
                  resData[key].name,
                  resData[key].species,
                  resData[key].type,
                  resData[key].name.replace(/ /g, "_"),
                  resData[key].description,
                  resData[key].weaknesses,
                  resData[key].ailments
                )
              );
            }
          }

          return monsters.sort((a, b) => a.name.localeCompare(b.name));
        }),
        tap((monsters) => {
          this._monsters.next(monsters);
        })
      );
  }
  
}
