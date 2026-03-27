import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch())  // ✅ uses the modern fetch API
  ]
};

