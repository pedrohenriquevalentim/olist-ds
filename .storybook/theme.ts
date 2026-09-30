import { create } from 'storybook/theming';

const shared = {
  colorPrimary: '#0a4ee4',
  colorSecondary: '#0a4ee4',
  appBorderRadius: 8,
  brandTitle: 'Olist Design System',
  brandUrl: 'https://olist.com',
  fontBase: "'Plus Jakarta Sans', sans-serif",
  fontCode: 'monospace',
};

export const lightTheme = create({
  ...shared,
  base: 'light',
  appBg: '#fcfbf8',
  appContentBg: '#ffffff',
  appBorderColor: '#e7e4da',
  textColor: '#10100f',
  textInverseColor: '#fcfbf8',
  barTextColor: '#827f73',
  barSelectedColor: '#0a4ee4',
  barBg: '#fcfbf8',
});

export const darkTheme = create({
  ...shared,
  base: 'dark',
  appBg: '#10100f',
  appContentBg: '#201f1d',
  appBorderColor: '#403f3b',
  textColor: '#fcfbf8',
  textInverseColor: '#10100f',
  barTextColor: '#afada2',
  barSelectedColor: '#2766ec',
  barBg: '#10100f',
});

export default lightTheme;
