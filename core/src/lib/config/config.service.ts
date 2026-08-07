import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG } from './app-config.token';
import { AppConfig } from './config.types';

/**
 * Provides access to application configuration.
 *
 * Configuration is supplied through Angular Dependency Injection,
 * allowing different environments to provide different values.
 */
@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(
    @Inject(APP_CONFIG)
    private readonly config: AppConfig,
  ) {}

  get apiUrl(): string {
    return this.config.apiUrl;
  }

  get production(): boolean {
    return this.config.production;
  }

  get appName(): string {
    return this.config.appName;
  }

  get version(): string {
    return this.config.version;
  }
}
