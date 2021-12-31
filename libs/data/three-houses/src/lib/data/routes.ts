import { Route } from '../models';

export const routes: Route[] = [
  {
    name: 'Azure Moon',
    lord: 'Dimitri',
    house: 'Blue Lions',
    unavailableCharacters: ['Edelgard', 'Hubert', 'Jeritza', 'Claude'],
  },
  {
    name: 'Crimson Flower',
    lord: 'Edelgard',
    house: 'Black Eagles',
    unavailableCharacters: [
      'Dimitri',
      'Dedue',
      'Gilbert',
      'Claude',
      'Hilda',
      'Seteth',
      'Flayn',
      'Catherine',
      'Cyril',
    ],
  },
  {
    name: 'Verdant Wind',
    lord: 'Claude',
    house: 'Golden Deers',
    unavailableCharacters: [
      'Edelgard',
      'Hubert',
      'Jeritza',
      'Dimitri',
      'Dedue',
      'Gilbert',
    ],
  },
  {
    name: 'Silver Snow',
    lord: null,
    house: 'Black Eagles',
    unavailableCharacters: [
      'Edelgard',
      'Hubert',
      'Jeritza',
      'Dimitri',
      'Dedue',
      'Gilbert',
      'Claude',
    ],
  },
];

export const freeUpdateCharacters = ['Anna', 'Jeritza'];
