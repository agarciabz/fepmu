import {
  Character,
  CharacterClass,
  ProficiencyLevel,
  ProficiencyName,
} from '@fepmu/data/three-houses';

export type SkillMap = Map<ProficiencyName, number>;
export type FrequencyMap = Map<number, ProficiencyName[]>;

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

const weaponCount = initializeMap();

/**
 * Get weapon types with less frecuency
 */
export const getInfrecuentWeapons: (map: SkillMap) => ProficiencyName[] = (
  map
) => {
  const frequency: FrequencyMap = getFrequencyMap(map);
  const lowestFreq = getLowestFreqNumber(frequency);
  return frequency.get(lowestFreq) || [];
};

/**
 * Group skills by its frequency
 */
export const getFrequencyMap: (map: SkillMap) => FrequencyMap = (map) => {
  const freq: FrequencyMap = new Map();
  for (const [profName, numbers] of map) {
    const proficiencies = freq.get(numbers) || [];
    proficiencies.push(profName);
    freq.set(numbers, proficiencies);
  }
  return freq;
};

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
