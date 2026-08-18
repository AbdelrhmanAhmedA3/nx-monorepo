import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

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
      loadRemoteModule('data', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'table',
    loadChildren: () =>
      loadRemoteModule('table', './Routes').then((m) => m.remoteRoutes),
  },
];




