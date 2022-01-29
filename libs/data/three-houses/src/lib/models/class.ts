import { Gender } from '.';

export interface CharacterClass {
  id: number;
  code: string;
  name: string;
  requiredSkills: string[]; // Proficiency code list
  requiredGender: Gender[];
  exclusiveTo: string[]; // Character code list
  unitType: string[]; // magic, armor, riding /or flying
  fromSeasonPass: boolean;
}
