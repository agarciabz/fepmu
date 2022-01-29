import { promises as fsPromises } from 'fs';
import { Character } from '../../../libs/data/three-houses/src';
import { CharacterRaw, cleanseUnitData } from './models';
import { readCsv } from '../read';

const mapUnitsData = (units: CharacterRaw[]): Character[] =>
  units.map(cleanseUnitData);

const mapUnitsToObject = (data: Character[]) =>
  Object.fromEntries(data.map((d) => [d.id, d]));

const main = async () => {
  const data: CharacterRaw[] = await readCsv('units.csv');
  const refined = mapUnitsToObject(mapUnitsData(data));
  const fileContent = `const data = ${JSON.stringify(refined)}`;
  await fsPromises.writeFile('refined.ts', fileContent);
};

main().then();
