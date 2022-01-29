import { readCsv } from '../read';
import { promises as fsPromises } from 'fs';
import { ClassRaw, mapClassData as cleansClassData } from './models';
import { CharacterClass } from '../../../libs/data/three-houses/src';

const mapClassData = (classes: ClassRaw[]): CharacterClass[] =>
  classes.map(cleansClassData).map((value, index) => ({
    ...value,
    id: index + 1,
  }));

const mapUnitsToObject = (data: CharacterClass[]) =>
  Object.fromEntries(data.map((d) => [d.code, d]));

const main = async () => {
  const data = await readCsv('classes.csv');
  const refined = mapUnitsToObject(mapClassData(data));
  const fileContent = `const data = ${JSON.stringify(refined)}`;
  await fsPromises.writeFile('class-list.ts', fileContent);
};

main().then();
