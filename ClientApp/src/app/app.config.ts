import { ApplicationConfig } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
    providers: [provideHttpClient(),
        importProvidersFrom(BrowserModule),
        { provide: LOCALE_ID, useValue: 'en-AU' }]
};
