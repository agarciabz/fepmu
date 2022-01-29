import { ClassRaw } from '.';
import { CharacterClass } from '../../../../libs/data/three-houses/src';

const split = (text: string): string[] =>
  text.replace(' ', '').toLowerCase().split(',');

export const mapClassData = (data: ClassRaw): CharacterClass => ({
  id: 0,
  code: data.ID.replace(' ', '').toLowerCase(),
  name: data.ID,
  exclusiveTo: split(data.CharacterExclusive),
  requiredGender: split(data.ReqGender).map((g) =>
    g === 'm' ? 'male' : 'female'
  ),
  requiredSkills: split(data.ReqSkill),
  unitType: split(data.UnitType),
  fromSeasonPass: false,
});
