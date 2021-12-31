import { Gender } from './utils';

export interface Character {
  name: string;
  defaultClass: string;
  gender: Gender;
  proficiencies: Proficiencies;
  faction: string;
}

export interface Proficiencies {
  swordProficiency: string;
  lanceProficiency: string;
  axeProficiency: string;
  bowProficiency: string;
  brawlingProficiency: string;
  reasonProficiency: string;
  faithProficiency: string;
  authorityProficiency: string;
  armorProficiency: string;
  ridingProficiency: string;
  flyingProficiency: string;
}
