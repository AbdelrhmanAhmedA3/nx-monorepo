import { provideHttpClient } from '@angular/common/http';
import {
  provideBrowserGlobalErrorListeners
} from '@angular/core';
import { providePrimeNG } from 'primeng/config';

import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { appRoutes } from 'routes';
import { AppTheme } from '../../../theme/src';

export const sharedProviders = [
  provideBrowserGlobalErrorListeners(),
  provideHttpClient(),
  providePrimeNG(AppTheme),
      provideRouter(
      appRoutes,
      withComponentInputBinding(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
      }),
    ),
];