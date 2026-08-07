import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    service = new LoggerService();

    vi.spyOn(console, 'debug').mockImplementation(vi.fn());
    vi.spyOn(console, 'info').mockImplementation(vi.fn());
    vi.spyOn(console, 'warn').mockImplementation(vi.fn());
    vi.spyOn(console, 'error').mockImplementation(vi.fn());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('log', () => {
    it('should call console.debug for debug level', () => {
      service.log('debug', 'Debug message', 'data1', 123);

      expect(console.debug).toHaveBeenCalledOnce();
      expect(console.debug).toHaveBeenCalledWith('Debug message', 'data1', 123);
    });

    it('should call console.info for info level', () => {
      service.log('info', 'Info message', 'data');

      expect(console.info).toHaveBeenCalledOnce();
      expect(console.info).toHaveBeenCalledWith('Info message', 'data');
    });

    it('should call console.warn for warn level', () => {
      service.log('warn', 'Warning message');

      expect(console.warn).toHaveBeenCalledOnce();
      expect(console.warn).toHaveBeenCalledWith('Warning message');
    });

    it('should call console.error for error level', () => {
      service.log('error', 'Error message', { id: 1 });

      expect(console.error).toHaveBeenCalledOnce();
      expect(console.error).toHaveBeenCalledWith('Error message', { id: 1 });
    });
  });

  describe('debug', () => {
    it('should delegate to log with debug level', () => {
      const spy = vi.spyOn(service, 'log');

      service.debug('Debug message', 'data');

      expect(spy).toHaveBeenCalledWith('debug', 'Debug message', 'data');
    });
  });

  describe('info', () => {
    it('should delegate to log with info level', () => {
      const spy = vi.spyOn(service, 'log');

      service.info('Info message', 123);

      expect(spy).toHaveBeenCalledWith('info', 'Info message', 123);
    });
  });

  describe('warn', () => {
    it('should delegate to log with warn level', () => {
      const spy = vi.spyOn(service, 'log');

      service.warn('Warning message');

      expect(spy).toHaveBeenCalledWith('warn', 'Warning message');
    });
  });

  describe('error', () => {
    it('should delegate to log with error level', () => {
      const spy = vi.spyOn(service, 'log');

      service.error('Error message', new Error('Failure'));

      expect(spy).toHaveBeenCalledWith('error', 'Error message', expect.any(Error));
    });
  });
});
