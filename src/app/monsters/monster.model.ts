import { MonsterWeakness } from './monster_weakness.model';
import { MonsterAilments } from './monster_ailments.model';

export class Monster {
  constructor(
    public id: string,
    public name: string,
    public species: string,
    public type: string,
    public imgUrl: string,
    public description: string,
    public monsterWeakness: [MonsterWeakness],
    public monsterAilments: [MonsterAilments]
  ) {}
}
