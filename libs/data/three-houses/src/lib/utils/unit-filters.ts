import { Character, Gender, Options, Route } from '../models';
import { freeUpdateCharacters, getUnit } from '../data';

const avatarCode = {
  male: 'bylethm',
  female: 'bylethf',
};

export const splitAvatarUnit = (units: Character[], gender: Gender) => [
  getUnit(avatarCode[gender]),
  ...units.filter((u) => !Object.values(avatarCode).includes(u.id)),
];

const filterSeasonPass = (unit: Character, enabled: boolean) =>
  enabled ? true : unit.faction !== 'Ashen Wolves';

const filterFreeUpdates = (unit: Character, enabled: boolean) =>
  enabled ? true : !freeUpdateCharacters.includes(unit.name);

const filterOtherHouses = (unit: Character, house: string, enabled: boolean) =>
  enabled
    ? true
    : [house, 'Church of Seiros', 'Ashen Wolves'].includes(unit.faction);

const filterUnavailable = (unit: Character, route: Route) =>
  !route.unavailableCharacters.includes(unit.name);

// Order is important
export const filterUnit = (unit: Character, route: Route, options: Options) =>
  filterSeasonPass(unit, options.includeSeasonPass) &&
  filterFreeUpdates(unit, options.includeFreeUpdates) &&
  filterOtherHouses(unit, route.house, options.allowOtherHouses) &&
  filterUnavailable(unit, route);
