import {
  CLASSLIST,
  ProficiencyName,
  getClass,
  getUnit,
} from '@fepmu/data/three-houses';

import {
  FrequencyMap,
  getClassesByProficiencies,
  getFrequencyMap,
  getInfrecuentWeapons,
  getLowestFreqNumber,
  getUnitProficiencies,
  SkillMap,
} from './balance';

const initializeTestMap: () => SkillMap = () => {
  // Exclude authority
  const map: SkillMap = new Map();
  map.set('armorProficiency', 1);
  map.set('axeProficiency', 3);
  map.set('bowProficiency', 2);
  map.set('brawlingProficiency', 0);
  map.set('faithProficiency', 0);
  map.set('flyingProficiency', 0);
  map.set('lanceProficiency', 2);
  map.set('reasonProficiency', 1);
  map.set('ridingProficiency', 1);
  map.set('swordProficiency', 3);
  return map;
};

const initializeTestFrequencyMap: () => FrequencyMap = () => {
  const map: FrequencyMap = new Map();
  map.set(0, ['brawlingProficiency', 'faithProficiency', 'flyingProficiency']);
  map.set(1, ['armorProficiency', 'reasonProficiency', 'ridingProficiency']);
  map.set(2, ['bowProficiency', 'lanceProficiency']);
  map.set(3, ['axeProficiency', 'swordProficiency']);
  return map;
};

const initializeTestFrequencyMap2: () => FrequencyMap = () => {
  const map: FrequencyMap = new Map();
  map.set(1, ['brawlingProficiency', 'faithProficiency', 'flyingProficiency']);
  map.set(2, ['armorProficiency', 'reasonProficiency', 'ridingProficiency']);
  map.set(3, ['bowProficiency', 'lanceProficiency']);
  map.set(4, ['axeProficiency', 'swordProficiency']);
  return map;
};

describe('balance', () => {
  const map = initializeTestMap();
  const freq = initializeTestFrequencyMap();

  describe('getInfrecuentWeapons', () => {
    it('should return less used weapons', () => {
      const expected: ProficiencyName[] = [
        'brawlingProficiency',
        'faithProficiency',
        'flyingProficiency',
      ];

      const result = getInfrecuentWeapons(map);

      expect(result).toEqual(expected);
    });
  });

  describe('getFrequencyMap', () => {
    it('should build the frequency map', () => {
      const expected = freq;
      const result = getFrequencyMap(map);
      expect(result).toStrictEqual(expected);
    });
  });

  describe('getLowestFreqNumber', () => {
    it('should get the number of the less repeated skill', () => {
      const freq = initializeTestFrequencyMap2();
      const expected = 1;
      const result = getLowestFreqNumber(freq);
      expect(result).toBe(expected);
    });
  });

  describe('getClassesByProficiencies', () => {
    it('should get list of classes that require certain proficiencies', () => {
      const skills = ['brawling', 'flying'];
      const expectedClasses = [
        getClass('warmaster'),
        getClass('warmonk'),
        getClass('falconknight'),
        getClass('wyvernlord'),
        getClass('darkflier'),
      ];
      const expectedClassesNames = expectedClasses.map((c) => c.code).sort();

      const result = getClassesByProficiencies(skills, CLASSLIST)
        .map((c) => c.code)
        .sort();

      expect(result).toEqual(expectedClassesNames);
    });
  });

  describe('getUnitProficiencies', () => {
    it('should return the list of proficiencies of a unit', () => {
      const expected: ProficiencyName[] = [
        'bowProficiency',
        'brawlingProficiency',
        'swordProficiency',
      ];
      const unit = getUnit('felix');

      const result = getUnitProficiencies(unit);

      expect(result).toEqual(expected);
    });
  });
});
