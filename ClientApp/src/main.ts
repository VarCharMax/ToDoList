import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import './app/helpers/array-extensions';

bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient(),
      importProvidersFrom(BrowserModule)
    ]
})
  .catch(err => console.error(err));
