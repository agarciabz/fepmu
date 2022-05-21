// theme.ts

// 1. import `extendTheme` function
import {
  extendTheme,
  withDefaultColorScheme,
  type ThemeConfig,
} from '@chakra-ui/react';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const defaultTheme = extendTheme(
  withDefaultColorScheme({
    colorScheme: 'teal',
    components: ['Button', 'Checkbox', 'Select'],
  })
);

// 3. extend the theme
const theme = extendTheme({ ...defaultTheme, config });

export default theme;
