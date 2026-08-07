import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function input(): HTMLInputElement {
    return fixture.nativeElement.querySelector('input');
  }

  describe('Rendering', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should render label', () => {
      fixture.componentRef.setInput('label', 'Email');
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.input__label')?.textContent).toContain('Email');
    });

    it('should render placeholder', () => {
      fixture.componentRef.setInput('placeholder', 'Enter email');
      fixture.detectChanges();

      expect(input().placeholder).toBe('Enter email');
    });

    it('should render hint', () => {
      fixture.componentRef.setInput('hint', 'Helper text');
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.input__hint')?.textContent).toContain(
        'Helper text',
      );
    });

    it('should render error', () => {
      fixture.componentRef.setInput('error', 'Email is required');
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.input__error')?.textContent).toContain(
        'Email is required',
      );
    });

    it('should render required indicator', () => {
      fixture.componentRef.setInput('required', true);
      fixture.componentRef.setInput('label', 'Email');
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.input__required')).toBeTruthy();
    });
  });

  describe('States', () => {
    it('should disable input', () => {
      fixture.componentRef.setInput('disabled', true);
      fixture.detectChanges();

      expect(input().disabled).toBe(true);
    });

    it('should make input readonly', () => {
      fixture.componentRef.setInput('readonly', true);
      fixture.detectChanges();

      expect(input().readOnly).toBe(true);
    });

    it('should apply invalid class', () => {
      fixture.componentRef.setInput('invalid', true);
      fixture.detectChanges();

      expect(input().classList).toContain('input__field--invalid');
    });
  });

  describe('Accessibility', () => {
    it('should set aria-invalid', () => {
      fixture.componentRef.setInput('invalid', true);
      fixture.detectChanges();

      expect(input().getAttribute('aria-invalid')).toBe('true');
    });

    it('should set aria-required', () => {
      fixture.componentRef.setInput('required', true);
      fixture.detectChanges();

      expect(input().getAttribute('aria-required')).toBe('true');
    });

    it('should associate hint with aria-describedby', () => {
      fixture.componentRef.setInput('hint', 'Helper');
      fixture.detectChanges();

      expect(input().getAttribute('aria-describedby')).toContain('-hint');
    });

    it('should associate error with aria-describedby', () => {
      fixture.componentRef.setInput('error', 'Invalid');
      fixture.detectChanges();

      expect(input().getAttribute('aria-describedby')).toContain('-error');
    });
  });

  describe('Password Toggle', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('type', 'password');
      fixture.componentRef.setInput('showPasswordToggle', true);
      fixture.detectChanges();
    });

    it('should render toggle button', () => {
      expect(fixture.nativeElement.querySelector('.input__toggle')).toBeTruthy();
    });

    it('should render password input initially', () => {
      expect(input().type).toBe('password');
    });

    it('should toggle password visibility', () => {
      const button = fixture.debugElement.query(By.css('.input__toggle'));

      button.nativeElement.click();

      fixture.detectChanges();

      expect(input().type).toBe('text');
    });

    it('should update aria-pressed', () => {
      const button: HTMLButtonElement = fixture.nativeElement.querySelector('.input__toggle');

      expect(button.getAttribute('aria-pressed')).toBe('false');

      button.click();

      fixture.detectChanges();

      expect(button.getAttribute('aria-pressed')).toBe('true');
    });
  });
});
