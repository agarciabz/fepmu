import { data } from './data';
import { Character } from '../../libs/data/three-houses/src';

type Data = typeof data[number];

export const dataToCharacter = (data: Data): Character => ({
  name: data.ID,
  defaultClass: '',
  gender: data.Gender === 'M' ? 'male' : 'female',
  faction: data.Faction,
  proficiencies: {
    armorProficiency: data.ArmorProficiency,
    authorityProficiency: data.AuthorityProficiency,
    axeProficiency: data.AxeProficiency,
    bowProficiency: data.BowProficiency,
    brawlingProficiency: data.BrawlingProficiency,
    faithProficiency: data.FaithProficiency,
    flyingProficiency: data.FlyingProficiency,
    lanceProficiency: data.LanceProficiency,
    reasonProficiency: data.ReasonProficiency,
    ridingProficiency: data.RidingProficiency,
    swordProficiency: data.SwordProficiency,
  },
});
