import { createReadStream, promises as fsPromises } from 'fs';
import { Character } from '../../../libs/data/three-houses/src';
import { CharacterRaw, cleanseUnitData } from './models';

const csv = require('csv-parser');

/**
 * Return rows of a CSV file as an array.
 */
const readCsv = async (path: string): Promise<any[]> => {
  return new Promise((resolve) => {
    const res: any = [];
    const stream = createReadStream(path).pipe(csv());
    stream.on('data', (row: any) => res.push(row));
    stream.on('end', () => {
      resolve(res);
    });
  });
};

const mapUnitsData = (units: CharacterRaw[]): Character[] =>
  units.map(cleanseUnitData);

const mapUnitsToObject = (data: Character[]) =>
  Object.fromEntries(data.map((d) => [d.id, d]));

const main = async () => {
  const data: CharacterRaw[] = await readCsv('fe3hdb.csv');
  const refined = mapUnitsToObject(mapUnitsData(data));
  await fsPromises.writeFile('refined.ts', JSON.stringify(refined));
};

main().then();
