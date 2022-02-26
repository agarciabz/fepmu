import {
  Character,
  CharacterClass,
  ProficiencyLevel,
  ProficiencyName,
} from '@fepmu/data/three-houses';

export type SkillMap = Map<string, number>;
export type FrequencyMap = Map<number, string[]>;

export const initializeMap: () => SkillMap = () => {
  // Exclude authority
  const map: SkillMap = new Map();
  map.set('armorProficiency', 0);
  map.set('axeProficiency', 0);
  map.set('bowProficiency', 0);
  map.set('brawlingProficiency', 0);
  map.set('faithProficiency', 0);
  map.set('flyingProficiency', 0);
  map.set('lanceProficiency', 0);
  map.set('reasonProficiency', 0);
  map.set('ridingProficiency', 0);
  map.set('swordProficiency', 0);
  return map;
};

/**
 * Get weapon types with less frecuency
 */
export const getInfrecuentWeapons: (map: SkillMap) => string[] = (map) => {
  const frequency: FrequencyMap = getFrequencyMap(map);
  const lowestFreq = getLowestFreqNumber(frequency);
  return frequency.get(lowestFreq) || [];
};

/**
 * Group skills by its frequency
 */
export const getFrequencyMap: (skillMap: SkillMap) => FrequencyMap = (
  skillMap
) =>
  Array.from(skillMap.entries()).reduce((freqMap, skillMapEntry) => {
    const [skill, count] = skillMapEntry;
    const skillList = freqMap.get(count) || [];
    skillList.push(skill);
    freqMap.set(count, skillList);
    return freqMap;
  }, new Map<number, string[]>());

/**
 * Get lowest frequency of map
 */
export const getLowestFreqNumber: (freq: FrequencyMap) => number = (freq) => {
  const freqNumbers = Array.from(freq.keys()).sort();
  return freqNumbers[0];
};

/**
 * Get classes with certain proficiencies
 */
export const getClassesByProficiencies: (
  skillNames: string[],
  classList: CharacterClass[]
) => CharacterClass[] = (skillNames, classList) =>
  classList.filter((chClass) =>
    chClass.requiredSkills.some((skill) => skillNames.includes(skill))
  );

/**
 * Get positive proficiencies from a character.
 */
export const getUnitProficiencies: (unit: Character) => ProficiencyName[] = (
  unit
) =>
  Object.entries(unit.proficiencies)
    .filter(([, profLevel]) => profLevel === ProficiencyLevel.HIGH)
    .map(([profName]) => profName) as ProficiencyName[];
