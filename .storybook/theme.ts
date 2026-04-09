import { create } from 'storybook/theming';

export default create({
  base: 'light',

  // Cores da marca
  colorPrimary: '#0a4ee4',
  colorSecondary: '#0a4ee4',

  // UI
  appBg: '#fcfbf8',
  appContentBg: '#ffffff',
  appBorderColor: '#e7e4da',
  appBorderRadius: 8,

  // Texto
  textColor: '#10100f',
  textInverseColor: '#fcfbf8',

  // Barra de ferramentas
  barTextColor: '#827f73',
  barSelectedColor: '#0a4ee4',
  barBg: '#fcfbf8',

  // Branding
  brandTitle: 'Olist Design System',
  brandUrl: 'https://olist.com',
  // brandImage: '/logo-olist.svg',  // descomente se tiver logo

  // Fontes
  fontBase: "'Plus Jakarta Sans', sans-serif",
  fontCode: 'monospace',
});