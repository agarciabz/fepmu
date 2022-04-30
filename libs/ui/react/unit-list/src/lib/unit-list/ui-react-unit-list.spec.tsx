import { render } from '@testing-library/react';

import UiReactUnitList from './ui-react-unit-list';

describe('UiReactUnitList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiReactUnitList />);
    expect(baseElement).toBeTruthy();
  });
});
