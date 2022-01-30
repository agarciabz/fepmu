import { CharacterRaw } from './character-raw';
import {
  Character,
  Proficiencies,
} from '../../../../libs/data/three-houses/src';

const getUnitId = (id: string) =>
  id === 'Byleth (M)'
    ? 'bylethm'
    : id === 'Byleth (F)'
    ? 'bylethf'
    : id.toLowerCase();

export const cleanseUnitData = (data: CharacterRaw): Character => ({
  id: getUnitId(data.ID),
  name: data.ID,
  defaultClass: '',
  gender: data.Gender === 'M' ? 'male' : 'female',
  faction: data.Faction,
  proficiencies: mapProficiencies(getProficiencies(data)),
});

const mapProficiencyToNum = (prof: string): number =>
  prof === 'U' ? 1 : prof === 'D' ? -1 : 0;

const getProficiencies = (data: CharacterRaw) => {
  return {
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
  };
};

const mapProficiencies = (data: any): Proficiencies =>
  Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key,
      mapProficiencyToNum(value as string),
    ])
  ) as Proficiencies;
