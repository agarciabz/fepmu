import { render } from '@testing-library/react';

import UnitList from './unit-list';

describe('UnitList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UnitList />);
    expect(baseElement).toBeTruthy();
  });
});
