import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ChakraProvider>
        <App />
      </ChakraProvider>
    );

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <ChakraProvider>
        <App />
      </ChakraProvider>
    );

    expect(getByText(/Fire Emblem Three Houses/gi)).toBeTruthy();
  });
});
