import { ModuleFederationConfig } from '@nx/module-federation';
// Core libraries such as react, angular, redux, ngrx, etc. must be
// singletons. Otherwise the applications will not work together.
const coreLibraries = new Set([
  'react',
  'react-dom',
  'react-router-dom',
  // A workspace library for a publish/subscribe
  // system of communication.
  '@manutan-test/common',
]);

export const config: Partial<ModuleFederationConfig> = {
  // Share core libraries, and avoid everything else
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      return defaultConfig;
    }

    // Returning false means the library is not shared.
    return false;
  },
};
