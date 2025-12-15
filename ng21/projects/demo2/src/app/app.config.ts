import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import es from '@angular/common/locales/es';
registerLocaleData(es);

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
    // {
    //   provide: Time,
    //   useFactory: () => new Time(),
    // },
    // Time
  ],
};
