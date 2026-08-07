import { TestBed } from '@angular/core/testing';
import { GlobalErrorHandler } from './global-error-handler';
import { LoggerService } from '../logger';

describe('GlobalErrorHandler', () => {
  let errorHandler: GlobalErrorHandler;
  let logger: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GlobalErrorHandler,
        {
          provide: LoggerService,
          useValue: {
            error: vi.fn(),
          },
        },
      ],
    });

    errorHandler = TestBed.inject(GlobalErrorHandler);
    logger = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(errorHandler).toBeTruthy();
  });

  it('should log unhandled errors', () => {
    const error = new Error('Something went wrong');

    errorHandler.handleError(error);

    expect(logger.error).toHaveBeenCalledOnce();
    expect(logger.error).toHaveBeenCalledWith('Unhandled application error', error);
  });

  it('should log unknown error values', () => {
    const error = 'Unknown error';

    errorHandler.handleError(error);

    expect(logger.error).toHaveBeenCalledWith('Unhandled application error', error);
  });
});
