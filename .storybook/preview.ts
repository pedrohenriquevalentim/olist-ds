import '../src/generated/variables.css';
import type { Preview } from '@storybook/react-vite';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute({
      themes: {
        claro: 'light',
        escuro: 'dark',
      },
      defaultTheme: 'claro',
      attributeName: 'data-theme',
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      options: {
        claro: { name: 'Claro', value: '#fcfbf8' },
        escuro: { name: 'Escuro', value: '#10100f' },
      },
      default: 'claro',
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'AI',
          'Foundations', ['Colors', 'Typography'],
          'Components',
        ],
      },
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
