import { ErrorHandler, Injectable, inject } from '@angular/core';

import { LoggerService } from '../logger';

/**
 * Handles uncaught application errors.
 *
 * Centralizes error logging and can later be extended to
 * report errors to remote monitoring services.
 */
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private readonly logger = inject(LoggerService);

  handleError(error: unknown): void {
    this.logger.error('Unhandled application error', error);
  }
}
