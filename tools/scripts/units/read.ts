import { createReadStream } from 'fs';
import { Character } from '../../../libs/data/three-houses/src';
import { CharacterRaw, cleanseUnitData } from './models';

const csv = require('csv-parser');

/**
 * Return rows of a CSV file as an array.
 */
const readCsv = async (path: string): Promise<any[]> => {
  return new Promise((resolve) => {
    const res = [];
    const stream = createReadStream(path).pipe(csv());
    stream.on('data', (row) => res.push(row));
    stream.on('end', () => {
      resolve(res);
    });
  });
};

const mapUnitsData = (units: CharacterRaw[]): Character[] =>
  units.map(cleanseUnitData);

const main = async () => {
  const data: CharacterRaw[] = await readCsv('fe3hdb.csv');
  console.log(mapUnitsData(data));
};

main().then();
