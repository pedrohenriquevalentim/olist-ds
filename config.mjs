import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

register(StyleDictionary);

// Transform customizado: adiciona aspas em font-family
StyleDictionary.registerTransform({
  name: 'custom/font-family-quote',
  type: 'value',
  filter: (token) => {
    return (
      token.$type === 'fontFamilies' ||
      token.$type === 'string' ||
      token.path.includes('font') && token.path.includes('family')
    );
  },
  transform: (token) => {
    const val = token.$value ?? token.value;
    if (typeof val === 'string' && !val.startsWith("'")) {
      return `'${val}'`;
    }
    return val;
  },
});

// Transform customizado: converte números para px
StyleDictionary.registerTransform({
  name: 'custom/px-unit',
  type: 'value',
  filter: (token) => {
    const type = token.$type ?? token.type;
    const pxTypes = [
      'fontSizes', 'lineHeights', 'borderRadius',
      'borderWidth', 'spacing', 'sizing',
      'dimension', 'number', 'float'
    ];
    // Não converter opacity e font-weight
    if (token.path.includes('opacity')) return false;
    if (token.path.includes('weight')) return false;
    return pxTypes.includes(type);
  },
  transform: (token) => {
    const val = token.$value ?? token.value;
    const num = parseFloat(val);
    if (isNaN(num)) return val;
    if (num === 0) return '0';
    return `${num}px`;
  },
});

const sd = new StyleDictionary({
  source: ['src/tokens/base.json'],
  preprocessors: ['tokens-studio'],
  usesDtcg: true,
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      transforms: [
        'name/kebab',
        'custom/font-family-quote',
        'custom/px-unit',
      ],
      buildPath: 'src/generated/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
    js: {
      transformGroup: 'tokens-studio',
      transforms: ['name/camel'],
      buildPath: 'src/generated/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
        },
      ],
    },
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();