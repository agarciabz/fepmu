import { Gender } from './utils';

export interface Character {
  name: string;
  defaultClass: string;
  gender: Gender;
  proficiencies: Proficiencies;
  faction: string;
}

export const skills = [
  'sword',
  'lance',
  'axe',
  'bow',
  'brawling',
  'reason',
  'faith',
  'authority',
  'armor',
  'riding',
  'flying',
] as const;

type AddProficiency<T extends string> = `${T}Proficiency`;

export type Proficiencies = {
  [P in AddProficiency<typeof skills[number]>]: number;
};
