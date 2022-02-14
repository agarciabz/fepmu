import { getUnit } from '@fepmu/data/three-houses';
import { splitAvatarUnit } from './filters';

describe('filters', () => {
  it('filterAvatar', () => {
    const units = [getUnit('bylethm'), getUnit('bylethf'), getUnit('dimitri')];
    const expected = [getUnit('bylethm'), getUnit('dimitri')];

    const result = splitAvatarUnit(units, 'male');

    expect(result).toEqual(expected);
  });
});
