import { render } from '@testing-library/react';

import Unit from './unit';

describe('Unit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Unit />);
    expect(baseElement).toBeTruthy();
  });
});
