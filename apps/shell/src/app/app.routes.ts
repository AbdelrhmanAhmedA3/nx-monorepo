import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/components/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  {
    path: 'data',
    loadChildren: () =>
      loadRemote<typeof import('data/Routes')>('data/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
  {
    path: 'table',
    loadChildren: () =>
      loadRemote<typeof import('table/Routes')>('table/Routes').then(
        (m) => m!.remoteRoutes
      ),
      
  },
];




