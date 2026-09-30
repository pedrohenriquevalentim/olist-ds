import { addons } from 'storybook/manager-api';
import { lightTheme, darkTheme } from './theme';

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

addons.setConfig({
  theme: prefersDark ? darkTheme : lightTheme,
});
