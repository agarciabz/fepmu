import { Character, CharacterClass } from '../models';

export interface Pick {
  unit: Character;
  class?: CharacterClass;
}
