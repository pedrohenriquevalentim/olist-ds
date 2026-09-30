import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/docs/**/*.mdx',
    '../src/docs/**/*.stories.@(ts|tsx)',
    '../src/components/**/*.stories.@(ts|tsx)',
    '../src/components/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: (config) => {
    // GitHub Pages serve sob /olist-ds/ — sem esse base os chunks dinâmicos
    // não são encontrados e os componentes falham ao renderizar.
    if (process.env.NODE_ENV === 'production') {
      config.base = '/olist-ds/';
    }
    return config;
  },
};

export default config;