import { ModuleFederationConfig } from '@nx/module-federation';
import { config as baseConfig } from '../../module-federation.config';

const config: ModuleFederationConfig = {
  ...baseConfig,
  name: 'about',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
