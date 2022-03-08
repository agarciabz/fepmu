import { getUnit } from '../data';
import { splitAvatarUnit } from './unit-filters';

describe('filters', () => {
  it('filterAvatar', () => {
    const units = [getUnit('bylethm'), getUnit('bylethf'), getUnit('dimitri')];
    const expected = [getUnit('bylethm'), getUnit('dimitri')];

    const result = splitAvatarUnit(units, 'male');

    expect(result).toEqual(expected);
  });
});
