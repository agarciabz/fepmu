import { Route } from './game';
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
