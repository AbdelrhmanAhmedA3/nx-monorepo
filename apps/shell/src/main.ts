import { setRemoteDefinitions } from '@nx/angular/mf';

setRemoteDefinitions({
  table: 'http://localhost:4201',
  data: 'http://localhost:4202',
});

import('./bootstrap').catch((err) => console.error(err));


