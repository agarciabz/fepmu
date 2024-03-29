import { Character, Pick } from '../models';

export const units: { [K: string]: Character } = {
  bylethm: {
    id: 'bylethm',
    name: 'Byleth (M)',
    defaultClass: '',
    gender: 'male',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: 1,
      axeProficiency: 0,
      bowProficiency: 0,
      brawlingProficiency: 1,
      faithProficiency: 0,
      flyingProficiency: 0,
      lanceProficiency: 0,
      reasonProficiency: 0,
      ridingProficiency: 0,
      swordProficiency: 1,
    },
  },
  bylethf: {
    id: 'bylethf',
    name: 'Byleth (F)',
    defaultClass: '',
    gender: 'female',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: 1,
      axeProficiency: 0,
      bowProficiency: 0,
      brawlingProficiency: 1,
      faithProficiency: 0,
      flyingProficiency: 0,
      lanceProficiency: 0,
      reasonProficiency: 0,
      ridingProficiency: 0,
      swordProficiency: 1,
    },
  },
  edelgard: {
    id: 'edelgard',
    name: 'Edelgard',
    defaultClass: '',
    gender: 'female',
    faction: 'Black Eagles',
    proficiencies: {
      armorProficiency: 1,
      authorityProficiency: 1,
      axeProficiency: 1,
      bowProficiency: -1,
      brawlingProficiency: 0,
      faithProficiency: -1,
      flyingProficiency: 0,
      lanceProficiency: 0,
      reasonProficiency: 0,
      ridingProficiency: 0,
      swordProficiency: 1,
    },
  },
  hubert: {
    id: 'hubert',
    name: 'Hubert',
    defaultClass: '',
    gender: 'male',
    faction: 'Black Eagles',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: 1,
      axeProficiency: -1,
      bowProficiency: 1,
      brawlingProficiency: 0,
      faithProficiency: -1,
      flyingProficiency: -1,
      lanceProficiency: 0,
      reasonProficiency: 1,
      ridingProficiency: 0,
      swordProficiency: 0,
    },
  },
  dorothea: {
    id: 'dorothea',
    name: 'Dorothea',
    defaultClass: '',
    gender: 'female',
    faction: 'Black Eagles',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: 0,
      axeProficiency: 0,
      bowProficiency: 0,
      brawlingProficiency: 0,
      faithProficiency: -1,
      flyingProficiency: -1,
      lanceProficiency: 0,
      reasonProficiency: 1,
      ridingProficiency: -1,
      swordProficiency: 1,
    },
  },
  ferdinand: {
    id: 'ferdinand',
    name: 'Ferdinand',
    defaultClass: '',
    gender: 'male',
    faction: 'Black Eagles',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: 0,
      axeProficiency: 1,
      bowProficiency: 0,
      brawlingProficiency: 0,
      faithProficiency: 0,
      flyingProficiency: 0,
      lanceProficiency: 1,
      reasonProficiency: 0,
      ridingProficiency: 1,
      swordProficiency: 1,
    },
  },
  bernadetta: {
    id: 'bernadetta',
    name: 'Bernadetta',
    defaultClass: '',
    gender: 'female',
    faction: 'Black Eagles',
    proficiencies: {
      armorProficiency: -1,
      authorityProficiency: 0,
      axeProficiency: -1,
      bowProficiency: 1,
      brawlingProficiency: -1,
      faithProficiency: 0,
      flyingProficiency: 0,
      lanceProficiency: 1,
      reasonProficiency: 0,
      ridingProficiency: 0,
      swordProficiency: -1,
    },
  },
  caspar: {
    id: 'caspar',
    name: 'Caspar',
    defaultClass: '',
    gender: 'male',
    faction: 'Black Eagles',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: -1,
      axeProficiency: 1,
      bowProficiency: -1,
      brawlingProficiency: 1,
      faithProficiency: 0,
      flyingProficiency: 0,
      lanceProficiency: 0,
      reasonProficiency: -1,
      ridingProficiency: 0,
      swordProficiency: 0,
    },
  },
  petra: {
    id: 'petra',
    name: 'Petra',
    defaultClass: '',
    gender: 'female',
    faction: 'Black Eagles',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: 0,
      axeProficiency: 1,
      bowProficiency: 1,
      brawlingProficiency: 0,
      faithProficiency: -1,
      flyingProficiency: 1,
      lanceProficiency: 0,
      reasonProficiency: -1,
      ridingProficiency: 0,
      swordProficiency: 1,
    },
  },
  linhardt: {
    id: 'linhardt',
    name: 'Linhardt',
    defaultClass: '',
    gender: 'male',
    faction: 'Black Eagles',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: 0,
      axeProficiency: -1,
      bowProficiency: 0,
      brawlingProficiency: -1,
      faithProficiency: 1,
      flyingProficiency: 0,
      lanceProficiency: 0,
      reasonProficiency: 1,
      ridingProficiency: 0,
      swordProficiency: 0,
    },
  },
  dimitri: {
    id: 'dimitri',
    name: 'Dimitri',
    defaultClass: '',
    gender: 'male',
    faction: 'Blue Lions',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: 1,
      axeProficiency: -1,
      bowProficiency: 0,
      brawlingProficiency: 0,
      faithProficiency: 0,
      flyingProficiency: 0,
      lanceProficiency: 1,
      reasonProficiency: -1,
      ridingProficiency: 0,
      swordProficiency: 1,
    },
  },
  dedue: {
    id: 'dedue',
    name: 'Dedue',
    defaultClass: '',
    gender: 'male',
    faction: 'Blue Lions',
    proficiencies: {
      armorProficiency: 1,
      authorityProficiency: 0,
      axeProficiency: 1,
      bowProficiency: 0,
      brawlingProficiency: 1,
      faithProficiency: -1,
      flyingProficiency: -1,
      lanceProficiency: 1,
      reasonProficiency: 0,
      ridingProficiency: -1,
      swordProficiency: 0,
    },
  },
  felix: {
    id: 'felix',
    name: 'Felix',
    defaultClass: '',
    gender: 'male',
    faction: 'Blue Lions',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: -1,
      axeProficiency: 0,
      bowProficiency: 1,
      brawlingProficiency: 1,
      faithProficiency: 0,
      flyingProficiency: 0,
      lanceProficiency: 0,
      reasonProficiency: -1,
      ridingProficiency: 0,
      swordProficiency: 1,
    },
  },
  mercedes: {
    id: 'mercedes',
    name: 'Mercedes',
    defaultClass: '',
    gender: 'female',
    faction: 'Blue Lions',
    proficiencies: {
      armorProficiency: -1,
      authorityProficiency: 0,
      axeProficiency: -1,
      bowProficiency: 0,
      brawlingProficiency: 0,
      faithProficiency: 1,
      flyingProficiency: 0,
      lanceProficiency: -1,
      reasonProficiency: 1,
      ridingProficiency: 0,
      swordProficiency: -1,
    },
  },
  ashe: {
    id: 'ashe',
    name: 'Ashe',
    defaultClass: '',
    gender: 'male',
    faction: 'Blue Lions',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: 0,
      axeProficiency: 1,
      bowProficiency: 1,
      brawlingProficiency: 0,
      faithProficiency: 0,
      flyingProficiency: 0,
      lanceProficiency: 0,
      reasonProficiency: -1,
      ridingProficiency: 0,
      swordProficiency: 0,
    },
  },
  annette: {
    id: 'annette',
    name: 'Annette',
    defaultClass: '',
    gender: 'female',
    faction: 'Blue Lions',
    proficiencies: {
      armorProficiency: -1,
      authorityProficiency: 1,
      axeProficiency: 1,
      bowProficiency: -1,
      brawlingProficiency: 0,
      faithProficiency: 0,
      flyingProficiency: 0,
      lanceProficiency: 0,
      reasonProficiency: 1,
      ridingProficiency: 0,
      swordProficiency: 0,
    },
  },
  sylvain: {
    id: 'sylvain',
    name: 'Sylvain',
    defaultClass: '',
    gender: 'male',
    faction: 'Blue Lions',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: 0,
      axeProficiency: 1,
      bowProficiency: -1,
      brawlingProficiency: 0,
      faithProficiency: 0,
      flyingProficiency: 0,
      lanceProficiency: 1,
      reasonProficiency: 0,
      ridingProficiency: 1,
      swordProficiency: 0,
    },
  },
  ingrid: {
    id: 'ingrid',
    name: 'Ingrid',
    defaultClass: '',
    gender: 'female',
    faction: 'Blue Lions',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: 0,
      axeProficiency: 0,
      bowProficiency: 0,
      brawlingProficiency: 0,
      faithProficiency: 0,
      flyingProficiency: 1,
      lanceProficiency: 1,
      reasonProficiency: 0,
      ridingProficiency: 1,
      swordProficiency: 1,
    },
  },
  claude: {
    id: 'claude',
    name: 'Claude',
    defaultClass: '',
    gender: 'male',
    faction: 'Golden Deers',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: 1,
      axeProficiency: 0,
      bowProficiency: 1,
      brawlingProficiency: 0,
      faithProficiency: -1,
      flyingProficiency: 1,
      lanceProficiency: -1,
      reasonProficiency: 0,
      ridingProficiency: 0,
      swordProficiency: 1,
    },
  },
  lorenz: {
    id: 'lorenz',
    name: 'Lorenz',
    defaultClass: '',
    gender: 'male',
    faction: 'Golden Deers',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: 0,
      axeProficiency: 0,
      bowProficiency: 0,
      brawlingProficiency: -1,
      faithProficiency: 0,
      flyingProficiency: 0,
      lanceProficiency: 1,
      reasonProficiency: 1,
      ridingProficiency: 1,
      swordProficiency: 0,
    },
  },
  hilda: {
    id: 'hilda',
    name: 'Hilda',
    defaultClass: '',
    gender: 'female',
    faction: 'Golden Deers',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: -1,
      axeProficiency: 1,
      bowProficiency: 0,
      brawlingProficiency: 0,
      faithProficiency: -1,
      flyingProficiency: 0,
      lanceProficiency: 1,
      reasonProficiency: 0,
      ridingProficiency: 0,
      swordProficiency: 0,
    },
  },
  raphael: {
    id: 'raphael',
    name: 'Raphael',
    defaultClass: '',
    gender: 'male',
    faction: 'Golden Deers',
    proficiencies: {
      armorProficiency: 1,
      authorityProficiency: 0,
      axeProficiency: 1,
      bowProficiency: -1,
      brawlingProficiency: 1,
      faithProficiency: 0,
      flyingProficiency: 0,
      lanceProficiency: 0,
      reasonProficiency: -1,
      ridingProficiency: -1,
      swordProficiency: 0,
    },
  },
  lysithea: {
    id: 'lysithea',
    name: 'Lysithea',
    defaultClass: '',
    gender: 'female',
    faction: 'Golden Deers',
    proficiencies: {
      armorProficiency: -1,
      authorityProficiency: 1,
      axeProficiency: -1,
      bowProficiency: 0,
      brawlingProficiency: 0,
      faithProficiency: 1,
      flyingProficiency: 0,
      lanceProficiency: -1,
      reasonProficiency: 1,
      ridingProficiency: 0,
      swordProficiency: -1,
    },
  },
  ignatz: {
    id: 'ignatz',
    name: 'Ignatz',
    defaultClass: '',
    gender: 'male',
    faction: 'Golden Deers',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: 1,
      axeProficiency: 0,
      bowProficiency: 1,
      brawlingProficiency: 0,
      faithProficiency: 0,
      flyingProficiency: -1,
      lanceProficiency: 0,
      reasonProficiency: 0,
      ridingProficiency: 0,
      swordProficiency: 1,
    },
  },
  marianne: {
    id: 'marianne',
    name: 'Marianne',
    defaultClass: '',
    gender: 'female',
    faction: 'Golden Deers',
    proficiencies: {
      armorProficiency: -1,
      authorityProficiency: 0,
      axeProficiency: 0,
      bowProficiency: 0,
      brawlingProficiency: -1,
      faithProficiency: 1,
      flyingProficiency: 1,
      lanceProficiency: 0,
      reasonProficiency: 0,
      ridingProficiency: 1,
      swordProficiency: 1,
    },
  },
  leonie: {
    id: 'leonie',
    name: 'Leonie',
    defaultClass: '',
    gender: 'female',
    faction: 'Golden Deers',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: 0,
      axeProficiency: 0,
      bowProficiency: 1,
      brawlingProficiency: 0,
      faithProficiency: 0,
      flyingProficiency: 0,
      lanceProficiency: 1,
      reasonProficiency: 0,
      ridingProficiency: 1,
      swordProficiency: 0,
    },
  },
  manuela: {
    id: 'manuela',
    name: 'Manuela',
    defaultClass: '',
    gender: 'female',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: -1,
      authorityProficiency: 0,
      axeProficiency: 0,
      bowProficiency: 0,
      brawlingProficiency: 0,
      faithProficiency: 1,
      flyingProficiency: 1,
      lanceProficiency: 0,
      reasonProficiency: -1,
      ridingProficiency: 0,
      swordProficiency: 1,
    },
  },
  hanneman: {
    id: 'hanneman',
    name: 'Hanneman',
    defaultClass: '',
    gender: 'male',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: -1,
      authorityProficiency: 0,
      axeProficiency: 0,
      bowProficiency: 1,
      brawlingProficiency: 0,
      faithProficiency: 0,
      flyingProficiency: -1,
      lanceProficiency: 0,
      reasonProficiency: 1,
      ridingProficiency: 1,
      swordProficiency: 0,
    },
  },
  seteth: {
    id: 'seteth',
    name: 'Seteth',
    defaultClass: '',
    gender: 'male',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: 1,
      axeProficiency: 1,
      bowProficiency: 0,
      brawlingProficiency: 0,
      faithProficiency: 0,
      flyingProficiency: 1,
      lanceProficiency: 1,
      reasonProficiency: 0,
      ridingProficiency: -1,
      swordProficiency: 1,
    },
  },
  flayn: {
    id: 'flayn',
    name: 'Flayn',
    defaultClass: '',
    gender: 'female',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: -1,
      authorityProficiency: 0,
      axeProficiency: 0,
      bowProficiency: 0,
      brawlingProficiency: 0,
      faithProficiency: 1,
      flyingProficiency: 0,
      lanceProficiency: 1,
      reasonProficiency: 0,
      ridingProficiency: -1,
      swordProficiency: 0,
    },
  },
  cyril: {
    id: 'cyril',
    name: 'Cyril',
    defaultClass: '',
    gender: 'male',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: 0,
      axeProficiency: 1,
      bowProficiency: 1,
      brawlingProficiency: 0,
      faithProficiency: -1,
      flyingProficiency: 1,
      lanceProficiency: 1,
      reasonProficiency: -1,
      ridingProficiency: 1,
      swordProficiency: 0,
    },
  },
  catherine: {
    id: 'catherine',
    name: 'Catherine',
    defaultClass: '',
    gender: 'female',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: 0,
      axeProficiency: 0,
      bowProficiency: 0,
      brawlingProficiency: 1,
      faithProficiency: 0,
      flyingProficiency: 0,
      lanceProficiency: 0,
      reasonProficiency: -1,
      ridingProficiency: 0,
      swordProficiency: 1,
    },
  },
  alois: {
    id: 'alois',
    name: 'Alois',
    defaultClass: '',
    gender: 'male',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: 1,
      authorityProficiency: 0,
      axeProficiency: 1,
      bowProficiency: 0,
      brawlingProficiency: 1,
      faithProficiency: 0,
      flyingProficiency: -1,
      lanceProficiency: 0,
      reasonProficiency: -1,
      ridingProficiency: 0,
      swordProficiency: 0,
    },
  },
  gilbert: {
    id: 'gilbert',
    name: 'Gilbert',
    defaultClass: '',
    gender: 'male',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: 1,
      authorityProficiency: 0,
      axeProficiency: 1,
      bowProficiency: 0,
      brawlingProficiency: 0,
      faithProficiency: 0,
      flyingProficiency: 0,
      lanceProficiency: 1,
      reasonProficiency: 0,
      ridingProficiency: 1,
      swordProficiency: 0,
    },
  },
  shamir: {
    id: 'shamir',
    name: 'Shamir',
    defaultClass: '',
    gender: 'female',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: 0,
      axeProficiency: 0,
      bowProficiency: 1,
      brawlingProficiency: 0,
      faithProficiency: -1,
      flyingProficiency: 0,
      lanceProficiency: 1,
      reasonProficiency: 0,
      ridingProficiency: 0,
      swordProficiency: 0,
    },
  },
  jeritza: {
    id: 'jeritza',
    name: 'Jeritza',
    defaultClass: '',
    gender: 'male',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: -1,
      axeProficiency: 0,
      bowProficiency: 0,
      brawlingProficiency: 1,
      faithProficiency: -1,
      flyingProficiency: 0,
      lanceProficiency: 1,
      reasonProficiency: 0,
      ridingProficiency: 1,
      swordProficiency: 1,
    },
  },
  anna: {
    id: 'anna',
    name: 'Anna',
    defaultClass: '',
    gender: 'female',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: -1,
      axeProficiency: 1,
      bowProficiency: 1,
      brawlingProficiency: 0,
      faithProficiency: 1,
      flyingProficiency: 0,
      lanceProficiency: 0,
      reasonProficiency: -1,
      ridingProficiency: 0,
      swordProficiency: 1,
    },
  },
  yuri: {
    id: 'yuri',
    name: 'Yuri',
    defaultClass: '',
    gender: 'male',
    faction: 'Ashen Wolves',
    proficiencies: {
      armorProficiency: 0,
      authorityProficiency: 1,
      axeProficiency: -1,
      bowProficiency: 0,
      brawlingProficiency: 0,
      faithProficiency: 1,
      flyingProficiency: -1,
      lanceProficiency: -1,
      reasonProficiency: 1,
      ridingProficiency: -1,
      swordProficiency: 1,
    },
  },
  balthus: {
    id: 'balthus',
    name: 'Balthus',
    defaultClass: '',
    gender: 'male',
    faction: 'Ashen Wolves',
    proficiencies: {
      armorProficiency: 1,
      authorityProficiency: 0,
      axeProficiency: 1,
      bowProficiency: -1,
      brawlingProficiency: 1,
      faithProficiency: 1,
      flyingProficiency: -1,
      lanceProficiency: -1,
      reasonProficiency: 0,
      ridingProficiency: 0,
      swordProficiency: 1,
    },
  },
  constance: {
    id: 'constance',
    name: 'Constance',
    defaultClass: '',
    gender: 'female',
    faction: 'Ashen Wolves',
    proficiencies: {
      armorProficiency: -1,
      authorityProficiency: 1,
      axeProficiency: -1,
      bowProficiency: 0,
      brawlingProficiency: 0,
      faithProficiency: 0,
      flyingProficiency: 1,
      lanceProficiency: 0,
      reasonProficiency: 1,
      ridingProficiency: 0,
      swordProficiency: 1,
    },
  },
  hapi: {
    id: 'hapi',
    name: 'Hapi',
    defaultClass: '',
    gender: 'female',
    faction: 'Ashen Wolves',
    proficiencies: {
      armorProficiency: -1,
      authorityProficiency: -1,
      axeProficiency: 0,
      bowProficiency: 0,
      brawlingProficiency: -1,
      faithProficiency: 0,
      flyingProficiency: 1,
      lanceProficiency: 0,
      reasonProficiency: 1,
      ridingProficiency: 1,
      swordProficiency: 0,
    },
  },
};

export type UnitNames = keyof typeof units;

export const UNITLIST = Object.entries(units).map(([, value]) => value);

export const getUnit = (id: string) => units[id];

export const getUnitsText = (units: Pick[]) =>
  units
    .map((u) => `${u.unit.name}${u.class ? `: ${u.class.name}` : ''}`)
    .join('\n');
