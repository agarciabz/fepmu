import { Character, Proficiencies } from '../models';

export const units: Character[] = [
  {
    name: 'Byleth (M)',
    defaultClass: 'Enlightened One',
    gender: 'male',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: '-',
      authorityProficiency: 'U',
      axeProficiency: '-',
      bowProficiency: '-',
      brawlingProficiency: 'U',
      faithProficiency: '-',
      flyingProficiency: '-',
      lanceProficiency: '-',
      reasonProficiency: '-',
      ridingProficiency: '-',
      swordProficiency: 'U',
    },
  },
  {
    name: 'Byleth (F)',
    defaultClass: 'Enlightened One',
    gender: 'female',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: '-',
      authorityProficiency: 'U',
      axeProficiency: '-',
      bowProficiency: '-',
      brawlingProficiency: 'U',
      faithProficiency: '-',
      flyingProficiency: '-',
      lanceProficiency: '-',
      reasonProficiency: '-',
      ridingProficiency: '-',
      swordProficiency: 'U',
    },
  },
  {
    name: 'Edelgard',
    defaultClass: 'Emperor',
    gender: 'female',
    faction: 'Black Eagles',
    proficiencies: {
      armorProficiency: 'U',
      authorityProficiency: 'U',
      axeProficiency: 'U',
      bowProficiency: 'D',
      brawlingProficiency: '-',
      faithProficiency: 'D',
      flyingProficiency: '-',
      lanceProficiency: '-',
      reasonProficiency: '-',
      ridingProficiency: '-',
      swordProficiency: 'U',
    },
  },
  {
    name: 'Hubert',
    defaultClass: 'Dark Bishop',
    gender: 'male',
    faction: 'Black Eagles',
    proficiencies: {
      armorProficiency: '-',
      authorityProficiency: 'U',
      axeProficiency: 'D',
      bowProficiency: 'U',
      brawlingProficiency: '-',
      faithProficiency: 'D',
      flyingProficiency: 'D',
      lanceProficiency: '-',
      reasonProficiency: 'U',
      ridingProficiency: '-',
      swordProficiency: '-',
    },
  },
  {
    name: 'Dorothea',
    defaultClass: 'Gremory',
    gender: 'female',
    faction: 'Black Eagles',
    proficiencies: {
      armorProficiency: '-',
      authorityProficiency: '-',
      axeProficiency: '-',
      bowProficiency: '-',
      brawlingProficiency: '-',
      faithProficiency: 'D',
      flyingProficiency: 'D',
      lanceProficiency: '-',
      reasonProficiency: 'U',
      ridingProficiency: 'D',
      swordProficiency: 'U',
    },
  },
  {
    name: 'Ferdinand',
    defaultClass: 'Great Knight',
    gender: 'male',
    faction: 'Black Eagles',
    proficiencies: {
      armorProficiency: '-',
      authorityProficiency: '-',
      axeProficiency: 'U',
      bowProficiency: '-',
      brawlingProficiency: '-',
      faithProficiency: '-',
      flyingProficiency: '-',
      lanceProficiency: 'U',
      reasonProficiency: '-',
      ridingProficiency: 'U',
      swordProficiency: 'U',
    },
  },
  {
    name: 'Bernadetta',
    defaultClass: 'Bow Knight',
    gender: 'female',
    faction: 'Black Eagles',
    proficiencies: {
      armorProficiency: 'D',
      authorityProficiency: '-',
      axeProficiency: 'D',
      bowProficiency: 'U',
      brawlingProficiency: 'D',
      faithProficiency: '-',
      flyingProficiency: '-',
      lanceProficiency: 'U',
      reasonProficiency: '-',
      ridingProficiency: '-',
      swordProficiency: 'D',
    },
  },
  {
    name: 'Caspar',
    defaultClass: 'War Master',
    gender: 'male',
    faction: 'Black Eagles',
    proficiencies: {
      armorProficiency: '-',
      authorityProficiency: 'D',
      axeProficiency: 'U',
      bowProficiency: 'D',
      brawlingProficiency: 'U',
      faithProficiency: '-',
      flyingProficiency: '-',
      lanceProficiency: '-',
      reasonProficiency: 'D',
      ridingProficiency: '-',
      swordProficiency: '-',
    },
  },
  {
    name: 'Petra',
    defaultClass: 'Mortal Savant',
    gender: 'female',
    faction: 'Black Eagles',
    proficiencies: {
      armorProficiency: '-',
      authorityProficiency: '-',
      axeProficiency: 'U',
      bowProficiency: 'U',
      brawlingProficiency: '-',
      faithProficiency: 'D',
      flyingProficiency: 'U',
      lanceProficiency: '-',
      reasonProficiency: 'D',
      ridingProficiency: '-',
      swordProficiency: 'U',
    },
  },
  {
    name: 'Linhardt',
    defaultClass: 'Holy Knight',
    gender: 'male',
    faction: 'Black Eagles',
    proficiencies: {
      armorProficiency: '-',
      authorityProficiency: '-',
      axeProficiency: 'D',
      bowProficiency: '-',
      brawlingProficiency: 'D',
      faithProficiency: 'U',
      flyingProficiency: '-',
      lanceProficiency: '-',
      reasonProficiency: 'U',
      ridingProficiency: '-',
      swordProficiency: '-',
    },
  },
  {
    name: 'Dimitri',
    defaultClass: 'Great Lord',
    gender: 'male',
    faction: 'Blue Lions',
    proficiencies: {
      armorProficiency: '-',
      authorityProficiency: 'U',
      axeProficiency: 'D',
      bowProficiency: '-',
      brawlingProficiency: '-',
      faithProficiency: '-',
      flyingProficiency: '-',
      lanceProficiency: 'U',
      reasonProficiency: 'D',
      ridingProficiency: '-',
      swordProficiency: 'U',
    },
  },
  {
    name: 'Dedue',
    defaultClass: 'Great Knight',
    gender: 'male',
    faction: 'Blue Lions',
    proficiencies: {
      armorProficiency: 'U',
      authorityProficiency: '-',
      axeProficiency: 'U',
      bowProficiency: '-',
      brawlingProficiency: 'U',
      faithProficiency: 'D',
      flyingProficiency: 'D',
      lanceProficiency: 'U',
      reasonProficiency: '-',
      ridingProficiency: 'D',
      swordProficiency: '-',
    },
  },
  {
    name: 'Felix',
    defaultClass: 'Mortal Savant',
    gender: 'male',
    faction: 'Blue Lions',
    proficiencies: {
      armorProficiency: '-',
      authorityProficiency: 'D',
      axeProficiency: '-',
      bowProficiency: 'U',
      brawlingProficiency: 'U',
      faithProficiency: '-',
      flyingProficiency: '-',
      lanceProficiency: '-',
      reasonProficiency: 'D',
      ridingProficiency: '-',
      swordProficiency: 'U',
    },
  },
  {
    name: 'Mercedes',
    defaultClass: 'Gremory',
    gender: 'female',
    faction: 'Blue Lions',
    proficiencies: {
      armorProficiency: 'D',
      authorityProficiency: '-',
      axeProficiency: 'D',
      bowProficiency: '-',
      brawlingProficiency: '-',
      faithProficiency: 'U',
      flyingProficiency: '-',
      lanceProficiency: 'D',
      reasonProficiency: 'U',
      ridingProficiency: '-',
      swordProficiency: 'D',
    },
  },
  {
    name: 'Ashe',
    defaultClass: 'Bow Knight',
    gender: 'male',
    faction: 'Blue Lions',
    proficiencies: {
      armorProficiency: '-',
      authorityProficiency: '-',
      axeProficiency: 'U',
      bowProficiency: 'U',
      brawlingProficiency: '-',
      faithProficiency: '-',
      flyingProficiency: '-',
      lanceProficiency: '-',
      reasonProficiency: 'D',
      ridingProficiency: '-',
      swordProficiency: '-',
    },
  },
  {
    name: 'Annette',
    defaultClass: 'Gremory',
    gender: 'female',
    faction: 'Blue Lions',
    proficiencies: {
      armorProficiency: 'D',
      authorityProficiency: 'U',
      axeProficiency: 'U',
      bowProficiency: 'D',
      brawlingProficiency: '-',
      faithProficiency: '-',
      flyingProficiency: '-',
      lanceProficiency: '-',
      reasonProficiency: 'U',
      ridingProficiency: '-',
      swordProficiency: '-',
    },
  },
  {
    name: 'Sylvain',
    defaultClass: 'Dark Knight',
    gender: 'male',
    faction: 'Blue Lions',
    proficiencies: {
      armorProficiency: '-',
      authorityProficiency: '-',
      axeProficiency: 'U',
      bowProficiency: 'D',
      brawlingProficiency: '-',
      faithProficiency: '-',
      flyingProficiency: '-',
      lanceProficiency: 'U',
      reasonProficiency: '-',
      ridingProficiency: 'U',
      swordProficiency: '-',
    },
  },
  {
    name: 'Ingrid',
    defaultClass: 'Falcon Knight',
    gender: 'female',
    faction: 'Blue Lions',
    proficiencies: {
      armorProficiency: '-',
      authorityProficiency: '-',
      axeProficiency: '-',
      bowProficiency: '-',
      brawlingProficiency: '-',
      faithProficiency: '-',
      flyingProficiency: 'U',
      lanceProficiency: 'U',
      reasonProficiency: '-',
      ridingProficiency: 'U',
      swordProficiency: 'U',
    },
  },
  {
    name: 'Claude',
    defaultClass: 'Barbarossa',
    gender: 'male',
    faction: 'Golden Deers',
    proficiencies: {
      armorProficiency: '-',
      authorityProficiency: 'U',
      axeProficiency: '-',
      bowProficiency: 'U',
      brawlingProficiency: '-',
      faithProficiency: 'D',
      flyingProficiency: 'U',
      lanceProficiency: 'D',
      reasonProficiency: '-',
      ridingProficiency: '-',
      swordProficiency: 'U',
    },
  },
  {
    name: 'Lorenz',
    defaultClass: 'Dark Knight',
    gender: 'male',
    faction: 'Golden Deers',
    proficiencies: {
      armorProficiency: '',
      authorityProficiency: '-',
      axeProficiency: '-',
      bowProficiency: '-',
      brawlingProficiency: 'D',
      faithProficiency: '-',
      flyingProficiency: '-',
      lanceProficiency: 'U',
      reasonProficiency: 'U',
      ridingProficiency: 'U',
      swordProficiency: '-',
    },
  },
  {
    name: 'Hilda',
    defaultClass: 'Wyvern Lord',
    gender: 'female',
    faction: 'Golden Deers',
    proficiencies: {
      armorProficiency: '-',
      authorityProficiency: 'D',
      axeProficiency: 'U',
      bowProficiency: '-',
      brawlingProficiency: '-',
      faithProficiency: 'D',
      flyingProficiency: '-',
      lanceProficiency: 'U',
      reasonProficiency: '-',
      ridingProficiency: '-',
      swordProficiency: '-',
    },
  },
  {
    name: 'Raphael',
    defaultClass: 'War Master',
    gender: 'male',
    faction: 'Golden Deers',
    proficiencies: {
      armorProficiency: 'U',
      authorityProficiency: '-',
      axeProficiency: 'U',
      bowProficiency: 'D',
      brawlingProficiency: 'U',
      faithProficiency: '-',
      flyingProficiency: '-',
      lanceProficiency: '-',
      reasonProficiency: 'D',
      ridingProficiency: 'D',
      swordProficiency: '-',
    },
  },
  {
    name: 'Lysithea',
    defaultClass: 'Gremory',
    gender: 'female',
    faction: 'Golden Deers',
    proficiencies: {
      armorProficiency: 'D',
      authorityProficiency: 'U',
      axeProficiency: 'D',
      bowProficiency: '-',
      brawlingProficiency: '-',
      faithProficiency: 'U',
      flyingProficiency: '-',
      lanceProficiency: 'D',
      reasonProficiency: 'U',
      ridingProficiency: '-',
      swordProficiency: 'D',
    },
  },
  {
    name: 'Ignatz',
    defaultClass: 'Bow Knight',
    gender: 'male',
    faction: 'Golden Deers',
    proficiencies: {
      armorProficiency: '-',
      authorityProficiency: 'U',
      axeProficiency: '-',
      bowProficiency: 'U',
      brawlingProficiency: '-',
      faithProficiency: '-',
      flyingProficiency: 'D',
      lanceProficiency: '-',
      reasonProficiency: '-',
      ridingProficiency: '-',
      swordProficiency: 'U',
    },
  },
  {
    name: 'Marianne',
    defaultClass: 'Holy Knight',
    gender: 'female',
    faction: 'Golden Deers',
    proficiencies: {
      armorProficiency: 'D',
      authorityProficiency: '-',
      axeProficiency: '-',
      bowProficiency: '-',
      brawlingProficiency: 'D',
      faithProficiency: 'U',
      flyingProficiency: 'U',
      lanceProficiency: '-',
      reasonProficiency: '-',
      ridingProficiency: 'U',
      swordProficiency: 'U',
    },
  },
  {
    name: 'Leonie',
    defaultClass: 'Bow Knight',
    gender: 'female',
    faction: 'Golden Deers',
    proficiencies: {
      armorProficiency: '-',
      authorityProficiency: '-',
      axeProficiency: '-',
      bowProficiency: 'U',
      brawlingProficiency: '-',
      faithProficiency: '-',
      flyingProficiency: '-',
      lanceProficiency: 'U',
      reasonProficiency: '-',
      ridingProficiency: 'U',
      swordProficiency: '-',
    },
  },
  {
    name: 'Manuela',
    defaultClass: 'Gremory',
    gender: 'female',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: 'D',
      authorityProficiency: '-',
      axeProficiency: '-',
      bowProficiency: '-',
      brawlingProficiency: '-',
      faithProficiency: 'U',
      flyingProficiency: 'U',
      lanceProficiency: '-',
      reasonProficiency: 'D',
      ridingProficiency: '-',
      swordProficiency: 'U',
    },
  },
  {
    name: 'Hanneman',
    defaultClass: 'Dark Knight',
    gender: 'male',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: 'D',
      authorityProficiency: '-',
      axeProficiency: '-',
      bowProficiency: 'U',
      brawlingProficiency: '-',
      faithProficiency: '-',
      flyingProficiency: 'D',
      lanceProficiency: '-',
      reasonProficiency: 'U',
      ridingProficiency: 'U',
      swordProficiency: '-',
    },
  },
  {
    name: 'Seteth',
    defaultClass: 'Wyvern Lord',
    gender: 'male',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: '-',
      authorityProficiency: 'U',
      axeProficiency: 'U',
      bowProficiency: '-',
      brawlingProficiency: '-',
      faithProficiency: '-',
      flyingProficiency: 'U',
      lanceProficiency: 'U',
      reasonProficiency: '-',
      ridingProficiency: 'D',
      swordProficiency: 'U',
    },
  },
  {
    name: 'Flayn',
    defaultClass: 'Gremory',
    gender: 'female',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: 'D',
      authorityProficiency: '-',
      axeProficiency: '-',
      bowProficiency: '-',
      brawlingProficiency: '-',
      faithProficiency: 'U',
      flyingProficiency: '-',
      lanceProficiency: 'U',
      reasonProficiency: '-',
      ridingProficiency: 'D',
      swordProficiency: '-',
    },
  },
  {
    name: 'Cyril',
    defaultClass: 'Wyvern Lord',
    gender: 'male',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: '-',
      authorityProficiency: '-',
      axeProficiency: 'U',
      bowProficiency: 'U',
      brawlingProficiency: '-',
      faithProficiency: 'D',
      flyingProficiency: 'U',
      lanceProficiency: 'U',
      reasonProficiency: 'D',
      ridingProficiency: 'U',
      swordProficiency: '-',
    },
  },
  {
    name: 'Catherine',
    defaultClass: 'Mortal Savant',
    gender: 'female',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: '-',
      authorityProficiency: '-',
      axeProficiency: '-',
      bowProficiency: '-',
      brawlingProficiency: 'U',
      faithProficiency: '-',
      flyingProficiency: '-',
      lanceProficiency: '-',
      reasonProficiency: 'D',
      ridingProficiency: '-',
      swordProficiency: 'U',
    },
  },
  {
    name: 'Alois',
    defaultClass: 'War Master',
    gender: 'male',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: 'U',
      authorityProficiency: '-',
      axeProficiency: 'U',
      bowProficiency: '-',
      brawlingProficiency: 'U',
      faithProficiency: '-',
      flyingProficiency: 'D',
      lanceProficiency: '-',
      reasonProficiency: 'D',
      ridingProficiency: '-',
      swordProficiency: '-',
    },
  },
  {
    name: 'Gilbert',
    defaultClass: 'Great Knight',
    gender: 'male',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: 'U',
      authorityProficiency: '-',
      axeProficiency: 'U',
      bowProficiency: '-',
      brawlingProficiency: '-',
      faithProficiency: '-',
      flyingProficiency: '-',
      lanceProficiency: 'U',
      reasonProficiency: '-',
      ridingProficiency: 'U',
      swordProficiency: '-',
    },
  },
  {
    name: 'Shamir',
    defaultClass: 'Bow Knight',
    gender: 'female',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: '-',
      authorityProficiency: '-',
      axeProficiency: '-',
      bowProficiency: 'U',
      brawlingProficiency: '-',
      faithProficiency: 'D',
      flyingProficiency: '-',
      lanceProficiency: 'U',
      reasonProficiency: '-',
      ridingProficiency: '-',
      swordProficiency: '-',
    },
  },
  {
    name: 'Jeritza',
    defaultClass: 'Dark Knight',
    gender: 'male',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: '-',
      authorityProficiency: 'D',
      axeProficiency: '-',
      bowProficiency: '-',
      brawlingProficiency: 'U',
      faithProficiency: 'D',
      flyingProficiency: '-',
      lanceProficiency: 'U',
      reasonProficiency: '-',
      ridingProficiency: 'U',
      swordProficiency: 'U',
    },
  },
  {
    name: 'Anna',
    defaultClass: 'Mortal Savant',
    gender: 'female',
    faction: 'Church of Seiros',
    proficiencies: {
      armorProficiency: '-',
      authorityProficiency: 'D',
      axeProficiency: 'U',
      bowProficiency: 'U',
      brawlingProficiency: '-',
      faithProficiency: 'U',
      flyingProficiency: '-',
      lanceProficiency: '-',
      reasonProficiency: 'D',
      ridingProficiency: '-',
      swordProficiency: 'U',
    },
  },
  {
    name: 'Yuri',
    defaultClass: 'Trickster',
    gender: 'male',
    faction: 'Ashen Wolves',
    proficiencies: {} as Proficiencies,
  },
  {
    name: 'Balthus',
    defaultClass: 'War Monk',
    gender: 'male',
    faction: 'Ashen Wolves',
    proficiencies: {} as Proficiencies,
  },
  {
    name: 'Constance',
    defaultClass: 'Dark Flier',
    gender: 'female',
    faction: 'Ashen Wolves',
    proficiencies: {} as Proficiencies,
  },
  {
    name: 'Hapi',
    defaultClass: 'Valkyrie',
    gender: 'female',
    faction: 'Ashen Wolves',
    proficiencies: {} as Proficiencies,
  },
];