import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { AppTheme } from 'stc-platform/theme';
import { appRoutes } from './app.routes';
export const appConfig: ApplicationConfig = {
  providers:  [
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

  
   
  ],
};
