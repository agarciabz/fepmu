import {
  getCharacterSkills,
  getRequiredSkills,
  getViability,
  isViable,
} from './builds';
import { SkillMap } from './balance';
import { getClass, getUnit } from '../data';

const initializeSkillMap = () => {
  const map: SkillMap = new Map();
  map.set('authority', -1);
  map.set('bow', 1);
  map.set('brawling', 1);
  map.set('reason', -1);
  map.set('sword', 1);
  return map;
};

describe('character build functions', () => {
  const characterClass = getClass('mortalsavant');
  const character = getUnit('felix');
  const skillList = ['reason', 'sword'];
  const skillMap = initializeSkillMap();

  it('getRequiredSkills', () => {
    const expected = skillList.sort();
    const result = getRequiredSkills(characterClass).sort();
    expect(result).toEqual(expected);
  });

  it('getCharacterSkills', () => {
    const expected: SkillMap = skillMap;
    const result = getCharacterSkills(character.proficiencies);
    expect(result).toEqual(expected);
  });

  it('getViability', () => {
    const expected = 0;
    const result = getViability(skillMap, skillList);
    expect(result).toBe(expected);
    // example 2
  });

  it('isViable', () => {
    const expected = true;
    const result = isViable(character, characterClass);
    expect(result).toEqual(expected);
  });
});
