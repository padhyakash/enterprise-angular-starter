import { Injectable } from '@angular/core';
import { LogLevel } from './logger.types';

/**
 * Provides a centralized logging API for the application.
 *
 * This service wraps the browser console and can later be
 * extended to support remote logging providers.
 */
@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(level: LogLevel, message: string, ...data: unknown[]): void {
    switch (level) {
      case 'debug':
        console.debug(message, ...data);
        break;

      case 'info':
        console.info(message, ...data);
        break;

      case 'warn':
        console.warn(message, ...data);
        break;

      case 'error':
        console.error(message, ...data);
        break;
    }
  }

  debug(message: string, ...data: unknown[]): void {
    this.log('debug', message, ...data);
  }

  info(message: string, ...data: unknown[]): void {
    this.log('info', message, ...data);
  }

  warn(message: string, ...data: unknown[]): void {
    this.log('warn', message, ...data);
  }

  error(message: string, ...data: unknown[]): void {
    this.log('error', message, ...data);
  }
}
