import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';

import { APP_CONFIG } from '../config';
import { ProvideCoreOptions } from './provide-core.types';

export function provideCore(options: ProvideCoreOptions): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: APP_CONFIG,
      useValue: options.config,
    },
  ]);
}
