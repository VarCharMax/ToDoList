import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { EnvironmentProviders } from '@angular/core';
import { provideAnimations, provideNoopAnimations} from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient(),
      importProvidersFrom(BrowserModule),
      provideAnimations(),
      provideNoopAnimations()
    ]
})
  .catch(err => console.error(err));
