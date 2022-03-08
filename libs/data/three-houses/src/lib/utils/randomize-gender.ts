import { Gender } from '../models';

export const randomizeGender = (): Gender =>
  Math.floor(Math.random() * 2) === 0 ? 'male' : 'female';
