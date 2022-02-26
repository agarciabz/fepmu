import {
  Character,
  CharacterClass,
  CLASSLIST,
  ProficiencyLevel,
  ProficiencyName,
} from '@fepmu/data/three-houses';

export type SkillMap = Map<string, number>;
export type FrequencyMap = Map<number, string[]>;

export const initializeSkillMap: () => SkillMap = () => {
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
export const getInfrecuentSkills: (map: SkillMap) => string[] = (map) => {
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

/**
 * From a list of classes, create a map that counts each skill
 */
export const createSkillMap: (classes: CharacterClass[]) => SkillMap = (
  classes
) =>
  classes.reduce((map, cl) => {
    cl.requiredSkills.forEach((skill) => {
      const skillName = `${skill}Proficiency`;
      const count = map.get(skillName) || 0;
      map.set(skillName, count + 1);
    });
    return map;
  }, initializeSkillMap());

/**
 * Get classes whose skills are less used in the current picked classes.
 */
export const getBalancedClasses: (
  current: CharacterClass[]
) => CharacterClass[] = (current) => {
  let res: CharacterClass[] = [];
  const skillMap = createSkillMap(current);
  const balancedSkills = getInfrecuentSkills(skillMap).map((proficiency) =>
    proficiency.replace('Proficiency', '')
  );
  const balancedClasses = getClassesByProficiencies(balancedSkills, CLASSLIST);
  res = balancedClasses;
  return res;
};
