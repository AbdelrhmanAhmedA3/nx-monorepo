import { init } from '@module-federation/enhanced/runtime';

init({
  name: 'shell',
  remotes: [
    {
      name: 'table',
      entry: 'http://localhost:4201/mf-manifest.json',
    },
    {
      name: 'data',
      entry: 'http://localhost:4202/mf-manifest.json',
    },
  ],
});

import('./bootstrap').catch((err) => console.error(err));


