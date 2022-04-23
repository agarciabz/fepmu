import { render } from '@testing-library/react';

import ThreeHousesForm from './three-houses-form';

describe('ThreeHousesForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThreeHousesForm />);
    expect(baseElement).toBeTruthy();
  });
});
