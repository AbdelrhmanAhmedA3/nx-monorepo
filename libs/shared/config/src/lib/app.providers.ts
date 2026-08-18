import { provideHttpClient } from '@angular/common/http';
import {
    provideBrowserGlobalErrorListeners,
    provideZonelessChangeDetection
} from '@angular/core';
import { providePrimeNG } from 'primeng/config';

import { AppTheme } from 'stc-platform/theme';
// import { MessageService } from 'primeng/api';
// import { DialogService } from 'primeng/dynamicdialog';

export const sharedProviders = [
  provideZonelessChangeDetection(),
  provideBrowserGlobalErrorListeners(),
  provideHttpClient(),
  providePrimeNG(AppTheme),
];
// DialogService,
// MessageService,