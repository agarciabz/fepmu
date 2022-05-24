import { getUnit, Pick } from '@fepmu/data/three-houses';
import { render } from '@testing-library/react';

import UnitList from './unit-list';

describe('UnitList', () => {
  it('should render successfully', () => {
    const picks: Pick[] = [{ unit: getUnit('dimitri') }];
    const { baseElement } = render(<UnitList picks={picks} />);
    expect(baseElement).toBeTruthy();
  });
});
