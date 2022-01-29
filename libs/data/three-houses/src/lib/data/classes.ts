import { CharacterClass } from '../models';

const classes: { [K: string]: CharacterClass } = {
  dancer: {
    id: 1,
    code: 'dancer',
    name: 'Dancer',
    exclusiveTo: [''],
    requiredGender: ['male', 'female'],
    requiredSkills: [''],
    unitType: ['magic'],
    fromSeasonPass: false,
  },
  swordmaster: {
    id: 2,
    code: 'swordmaster',
    name: 'Swordmaster',
    exclusiveTo: [''],
    requiredGender: ['male', 'female'],
    requiredSkills: ['sword'],
    unitType: [''],
    fromSeasonPass: false,
  },
  assassin: {
    id: 3,
    code: 'assassin',
    name: 'Assassin',
    exclusiveTo: [''],
    requiredGender: ['male', 'female'],
    requiredSkills: ['sword', 'bow'],
    unitType: [''],
    fromSeasonPass: false,
  },
  fortressknight: {
    id: 4,
    code: 'fortressknight',
    name: 'Fortress Knight',
    exclusiveTo: [''],
    requiredGender: ['male', 'female'],
    requiredSkills: ['axe', 'armor'],
    unitType: ['armor'],
    fromSeasonPass: false,
  },
  enlightenedone: {
    id: 5,
    code: 'enlightenedone',
    name: 'Enlightened One',
    exclusiveTo: ['bylethm', 'bylethf'],
    requiredGender: ['male', 'female'],
    requiredSkills: [''],
    unitType: ['magic'],
    fromSeasonPass: false,
  },
  emperor: {
    id: 6,
    code: 'emperor',
    name: 'Emperor',
    exclusiveTo: ['edelgard'],
    requiredGender: ['male', 'female'],
    requiredSkills: [''],
    unitType: ['armor'],
    fromSeasonPass: false,
  },
  greatlord: {
    id: 7,
    code: 'greatlord',
    name: 'Great Lord',
    exclusiveTo: ['dimitri'],
    requiredGender: ['male', 'female'],
    requiredSkills: [''],
    unitType: [''],
    fromSeasonPass: false,
  },
  barbarossa: {
    id: 8,
    code: 'barbarossa',
    name: 'Barbarossa',
    exclusiveTo: ['claude'],
    requiredGender: ['male', 'female'],
    requiredSkills: [''],
    unitType: ['flying'],
    fromSeasonPass: false,
  },
  falconknight: {
    id: 9,
    code: 'falconknight',
    name: 'Falcon Knight',
    exclusiveTo: [''],
    requiredGender: ['female'],
    requiredSkills: ['sword', 'lance', ' flying'],
    unitType: ['flying'],
    fromSeasonPass: false,
  },
  wyvernlord: {
    id: 10,
    code: 'wyvernlord',
    name: 'Wyvern Lord',
    exclusiveTo: [''],
    requiredGender: ['male', 'female'],
    requiredSkills: ['lance', 'axe', ' flying'],
    unitType: ['flying'],
    fromSeasonPass: false,
  },
  mortalsavant: {
    id: 11,
    code: 'mortalsavant',
    name: 'Mortal Savant',
    exclusiveTo: [''],
    requiredGender: ['male', 'female'],
    requiredSkills: ['sword', 'reason'],
    unitType: ['magic'],
    fromSeasonPass: false,
  },
  greatknight: {
    id: 12,
    code: 'greatknight',
    name: 'Great Knight',
    exclusiveTo: [''],
    requiredGender: ['male', 'female'],
    requiredSkills: ['axe', 'armor', ' riding'],
    unitType: ['riding', 'armor'],
    fromSeasonPass: false,
  },
  bowknight: {
    id: 13,
    code: 'bowknight',
    name: 'Bow Knight',
    exclusiveTo: [''],
    requiredGender: ['male', 'female'],
    requiredSkills: ['lance', 'bow', ' riding'],
    unitType: ['riding'],
    fromSeasonPass: false,
  },
  darkknight: {
    id: 14,
    code: 'darkknight',
    name: 'Dark Knight',
    exclusiveTo: [''],
    requiredGender: ['male', 'female'],
    requiredSkills: ['lance', 'reason', ' riding'],
    unitType: ['riding', 'magic'],
    fromSeasonPass: false,
  },
  holyknight: {
    id: 15,
    code: 'holyknight',
    name: 'Holy Knight',
    exclusiveTo: [''],
    requiredGender: ['male', 'female'],
    requiredSkills: ['lance', 'faith', ' riding'],
    unitType: ['riding', 'magic'],
    fromSeasonPass: false,
  },
  warmaster: {
    id: 16,
    code: 'warmaster',
    name: 'War Master',
    exclusiveTo: [''],
    requiredGender: ['male'],
    requiredSkills: ['axe', 'brawling'],
    unitType: [''],
    fromSeasonPass: false,
  },
  gremory: {
    id: 17,
    code: 'gremory',
    name: 'Gremory',
    exclusiveTo: [''],
    requiredGender: ['female'],
    requiredSkills: ['reason', 'faith'],
    unitType: ['magic'],
    fromSeasonPass: false,
  },
  trickster: {
    id: 18,
    code: 'trickster',
    name: 'Trickster',
    exclusiveTo: [''],
    requiredGender: ['male', 'female'],
    requiredSkills: ['sword', 'faith'],
    unitType: ['magic'],
    fromSeasonPass: true,
  },
  warmonk: {
    id: 19,
    code: 'warmonk',
    name: 'War Monk',
    exclusiveTo: [''],
    requiredGender: ['male', 'female'],
    requiredSkills: ['brawling', 'faith'],
    unitType: ['magic'],
    fromSeasonPass: true,
  },
  darkflier: {
    id: 20,
    code: 'darkflier',
    name: 'Dark Flier',
    exclusiveTo: [''],
    requiredGender: ['male', 'female'],
    requiredSkills: ['reason', 'flying'],
    unitType: ['flying', 'magic'],
    fromSeasonPass: true,
  },
  valkyrie: {
    id: 21,
    code: 'valkyrie',
    name: 'Valkyrie',
    exclusiveTo: [''],
    requiredGender: ['male', 'female'],
    requiredSkills: ['reason', 'riding'],
    unitType: ['riding', 'magic'],
    fromSeasonPass: true,
  },
  deathknight: {
    id: 22,
    code: 'deathknight',
    name: 'Death Knight',
    exclusiveTo: ['jeritza'],
    requiredGender: ['male'],
    requiredSkills: ['reason', 'riding'],
    unitType: ['riding', 'magic'],
    fromSeasonPass: false,
  },
};

export const CLASSLIST = Object.entries(classes).map(([, value]) => value);

export const getClass = (code: string) => classes[code];