import {
  Character,
  CharacterClass,
  Proficiencies,
} from '@fepmu/data/three-houses';
import { SkillMap } from './balance';

export const getRequiredSkills: (cls: CharacterClass) => string[] = (cls) =>
  cls.requiredSkills;

export const getCharacterSkills: (prof: Proficiencies) => SkillMap = (prof) =>
  new Map(
    Object.entries(mapProficienciesObject(prof)).filter(
      ([key, vaue]) => vaue !== 0
    )
  );

export const getViability: (
  skillMap: SkillMap,
  skillList: string[]
) => number = (skillMap, skillList) =>
  skillList.reduce(
    (viability, skill) => viability + (skillMap.get(skill) || 0),
    0
  );

export const isViable: (unit: Character, cls: CharacterClass) => boolean = (
  unit,
  cls
) =>
  getViability(getCharacterSkills(unit.proficiencies), cls.requiredSkills) >= 0;

export const mapProficienciesObject = (prof: Proficiencies) =>
  Object.fromEntries(
    Object.entries(prof).map(([key, value]) => [
      key.replace('Proficiency', ''),
      value,
    ])
  );
