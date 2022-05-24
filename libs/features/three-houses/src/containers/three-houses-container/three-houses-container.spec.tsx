import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';

import ThreeHousesContainer from './three-houses-container';

describe('ThreeHousesContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ChakraProvider>
        <ThreeHousesContainer />
      </ChakraProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
