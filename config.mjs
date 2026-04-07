import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

register(StyleDictionary);

const sd = new StyleDictionary({
  source: ['src/tokens/base.json'],
  include: ['src/tokens/base.json'],
  preprocessors: ['tokens-studio'],
  usesDtcg: true,
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      transforms: ['name/kebab'],
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