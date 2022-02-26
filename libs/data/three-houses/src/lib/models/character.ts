import { Gender } from './utils';

export interface Character {
  id: string;
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

export type ProficiencyName = AddProficiency<typeof skills[number]>;

export type Proficiencies = {
  [P in ProficiencyName]: number;
};

export enum ProficiencyLevel {
  HIGH = 1,
  REGULAR = 0,
  LOW = -1,
}
