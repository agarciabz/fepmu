import { createReadStream } from 'fs';
import csv from 'csv-parser';

/**
 * Return rows of a CSV file as an array.
 */
export const readCsv = async (path: string): Promise<any[]> => {
  return new Promise((resolve) => {
    const res: any = [];
    const stream = createReadStream(path).pipe(csv());
    stream.on('data', (row: any) => res.push(row));
    stream.on('end', () => {
      resolve(res);
    });
  });
};
