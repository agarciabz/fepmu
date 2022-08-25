import { getClass, getUnit, Pick } from '@fepmu/data/three-houses';
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

  it('should render inviable mark if class pick is inviable', () => {
    const pickProps: Pick = {
      unit: getUnit('mercedes'),
      class: getClass('fortressknight'),
      isInviable: true,
    };
    const { container } = render(<Unit pick={pickProps} />);
    expect(container.querySelector('#inviable')).toBeTruthy();
  });

  it('should NOT render inviable mark if class pick is viable', () => {
    const pickProps: Pick = {
      unit: getUnit('mercedes'),
      class: getClass('fortressknight'),
      isInviable: false,
    };
    const { container } = render(<Unit pick={pickProps} />);
    expect(container.querySelector('#inviable')).toBeFalsy();
  });
});
