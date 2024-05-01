import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { EventEmitter } from 'events';

if (environment.production) {
  enableProdMode();
}

EventEmitter.defaultMaxListeners = 100
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
