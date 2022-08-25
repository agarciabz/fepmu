import { CLASSLIST, getExclusiveClasses, routes as ROUTES, UNITLIST } from "../data";
import { Character, CharacterClass, Pick, Route, Options } from "../models";
import { getBalancedClasses } from "./balance";
import { isViable } from "./builds";
import { filterByOptions, filterBalanced } from "./class-filters";
import { randomizeGender } from "./randomize-gender";
import { splitAvatarUnit, filterUnit } from "./unit-filters";


export const getClassesFiltered = (
  includeSeasonPass: boolean,
  unit: Character,
  balanceRoster: boolean,
  balancedClasses: CharacterClass[],
  allowInviableBuilds: boolean,
  dancerPicked: boolean
) => {
  const balancedAvailable =
    balancedClasses.filter((cl) =>
      filterByOptions(
        cl,
        includeSeasonPass,
        unit.gender,
        dancerPicked,
        unit,
        allowInviableBuilds
      )
    ).length > 0;

  return CLASSLIST.filter(
    (cl) =>
      filterByOptions(
        cl,
        includeSeasonPass,
        unit.gender,
        dancerPicked,
        unit,
        allowInviableBuilds
      ) &&
      filterBalanced(cl, balanceRoster && balancedAvailable, balancedClasses)
  );
};

export const getRandomClass = (
  unit: Character,
  options: Options,
  currentPicks: Pick[],
  dancerPicked: boolean
): CharacterClass => {
  const { includeSeasonPass, balanceRoster, allowInviableBuilds } = options;
  const currentClasses = currentPicks
    .filter((p) => p.class)
    .map((p) => p.class) as CharacterClass[];
  const balancedClasses = balanceRoster
    ? getBalancedClasses(currentClasses)
    : [];

  const selectableClasses = [
    ...getClassesFiltered(
      includeSeasonPass,
      unit,
      balanceRoster,
      balancedClasses,
      allowInviableBuilds,
      dancerPicked
    ),
    ...getExclusiveClasses(unit),
  ];

  const random = Math.floor(Math.random() * selectableClasses.length);
  return selectableClasses[random];
};

export const randomizeUnits = (
  units: Character[],
  size: number,
  route: string
) => {
  const mandatoryCharacters = route === 'Silver Snow' ? 1 : 2;
  const lordName = (ROUTES.find((r) => r.name === route) as Route).lord;
  const lord = units.splice(
    units.findIndex((u) => u.name === lordName),
    1
  )[0];
  const picked: Character[] = [];
  const pickNum = size - mandatoryCharacters;
  const nonLordUnits = [...units];
  let count = pickNum;
  let pos;
  while (count > 0) {
    pos = Math.floor(Math.random() * nonLordUnits.length);
    picked.push(nonLordUnits.splice(pos, 1)[0]);
    count--;
  }
  return route === 'Silver Snow' ? [...picked] : [lord, ...picked];
};

export const applyFilters = (options: Options): Pick[] => {
  const { avatarGender: genderOp, randomizeClasses } = options;
  let dancerPicked = false;

  const avatarGender = genderOp === 'random' ? randomizeGender() : genderOp;
  const [avatar, ...nonAvatarUnits] = splitAvatarUnit(UNITLIST, avatarGender);

  const route = ROUTES.find((r) => r.name === options.route) as Route;

  const selectable = nonAvatarUnits.filter((unit) =>
    filterUnit(unit, route, options)
  );

  const selected = [
    avatar,
    ...randomizeUnits(selectable, options.rosterSize, options.route),
  ];

  return selected.reduce((picks: Pick[], unit: Character) => {
    const unitClass = randomizeClasses
      ? getRandomClass(unit, options, picks, dancerPicked)
      : undefined;
    const pick: Pick = {
      unit,
      class: unitClass,
      isInviable: randomizeClasses && unitClass ? !isViable(unit, unitClass) : false
    };
    dancerPicked = pick.class
      ? dancerPicked || (!dancerPicked && pick.class.code === 'dancer')
      : dancerPicked;
    picks.push(pick);
    return picks;
  }, []);
};
