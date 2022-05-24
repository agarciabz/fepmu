import { getUnit, Pick } from '@fepmu/data/three-houses';
import { render } from '@testing-library/react';

import Unit from './unit';

describe('Unit', () => {
  it('should render successfully', () => {
    const pickProps: Pick = {
      unit: getUnit('dimitri'),
    };
    const { baseElement } = render(<Unit pick={pickProps} />);
    expect(baseElement).toBeTruthy();
  });
});
