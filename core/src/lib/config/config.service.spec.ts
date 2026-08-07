import { TestBed } from '@angular/core/testing';
import { ConfigService } from './config.service';
import { APP_CONFIG } from './app-config.token';
import { AppConfig } from './config.types';

describe('ConfigService', () => {
  let service: ConfigService;

  const mockConfig: AppConfig = {
    apiUrl: 'http://localhost:3000',
    production: false,
    appName: 'Enterprise Angular Starter',
    version: '0.2.0',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConfigService,
        {
          provide: APP_CONFIG,
          useValue: mockConfig,
        },
      ],
    });

    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('apiUrl', () => {
    it('should return the apiUrl from config', () => {
      expect(service.apiUrl).toBe('http://localhost:3000');
    });
  });

  describe('production', () => {
    it('should return the production flag from config', () => {
      expect(service.production).toBe(false);
    });
  });

  describe('appName', () => {
    it('should return the app name from config', () => {
      expect(service.appName).toBe('Enterprise Angular Starter');
    });
  });

  describe('version', () => {
    it('should return the application version from config', () => {
      expect(service.version).toBe('0.2.0');
    });
  });
});
