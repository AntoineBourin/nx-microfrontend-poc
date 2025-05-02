const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const { coreFixConfig, genericConfig } = require('@manutan/parcel-ui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    join(
      __dirname,
      '../../node_modules/@manutan/parcel-ui/dist/**/*.{js,ts,jsx,tsx}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      ...coreFixConfig,
      ...genericConfig,
    },
  },
  plugins: [],
};
