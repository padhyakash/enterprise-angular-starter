import { TestBed } from '@angular/core/testing';
import { APP_CONFIG } from '../config';
import { provideCore } from './provide-core';
import { ProvideCoreOptions } from './provide-core.types';

describe('provideCore', () => {
  const options: ProvideCoreOptions = {
    config: {
      apiUrl: 'http://localhost:3000',
      production: false,
      appName: 'Enterprise Angular Starter',
      version: '0.2.0',
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideCore(options)],
    });
  });

  it('should provide APP_CONFIG', () => {
    const config = TestBed.inject(APP_CONFIG);

    expect(config).toEqual(options.config);
  });

  it('should provide the correct configuration values', () => {
    const config = TestBed.inject(APP_CONFIG);

    expect(config.apiUrl).toBe('http://localhost:3000');
    expect(config.production).toBe(false);
    expect(config.appName).toBe('Enterprise Angular Starter');
    expect(config.version).toBe('0.2.0');
  });
});
