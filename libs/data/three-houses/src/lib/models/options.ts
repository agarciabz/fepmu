import { Gender } from './utils';

export interface Options {
  route: string;
  avatarGender: Gender | 'random';
  randomizeClasses: boolean;
  allowInviableBuilds: boolean;
  allowOtherHouses: boolean;
  balanceRoster: boolean;
  includeFreeUpdates: boolean;
  includeSeasonPass: boolean;
  rosterSize: number;
}

export const defaultOptions: Options = {
  route: 'Azure Moon',
  avatarGender: 'male',
  randomizeClasses: false,
  allowInviableBuilds: false,
  allowOtherHouses: true,
  balanceRoster: false,
  includeFreeUpdates: true,
  includeSeasonPass: false,
  rosterSize: 12,
};
