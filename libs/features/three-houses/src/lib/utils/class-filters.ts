import { CharacterClass, Gender } from '@fepmu/data/three-houses';

const filterSeasonPass = (
  cl: CharacterClass,
  includeSeasonPass: boolean
): boolean => !cl.fromSeasonPass || (cl.fromSeasonPass && includeSeasonPass);

const filterExclusives = (cl: CharacterClass): boolean =>
  cl.exclusiveTo.length === 0;

const filterByGender = (cl: CharacterClass, gender: Gender): boolean =>
  cl.requiredGender.includes(gender);

export const filterBalanced = (
  cl: CharacterClass,
  balanceRoster: boolean,
  balancedClasses: CharacterClass[]
): boolean =>
  !balanceRoster ||
  (balanceRoster && (!balancedClasses.length ||
    balancedClasses.map((cl) => cl.code).includes(cl.code)));

const filterDancer = (cl: CharacterClass, isAlreadyPicked: boolean): boolean =>
  !(cl.code === 'dancer' && isAlreadyPicked);

export const filterByOptions = (cl: CharacterClass, seasonPass: boolean, gender: Gender, dancerPicker: boolean) =>
  filterSeasonPass(cl, seasonPass) &&
  filterExclusives(cl) &&
  filterByGender(cl, gender) &&
  filterDancer(cl, dancerPicker);
