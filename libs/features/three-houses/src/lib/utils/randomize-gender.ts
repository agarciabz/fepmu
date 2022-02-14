import { Gender } from '@fepmu/data/three-houses';

export const randomizeGender = (): Gender =>
  Math.floor(Math.random() * 2) === 0 ? 'male' : 'female';
