import { EnvironmentProviders, ErrorHandler, makeEnvironmentProviders } from '@angular/core';

import { APP_CONFIG } from '../config';
import { GlobalErrorHandler } from '../error-handler';
import { ProvideCoreOptions } from './provide-core.types';

export function provideCore(options: ProvideCoreOptions): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: APP_CONFIG,
      useValue: options.config,
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ]);
}
