import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let fixture: ComponentFixture<ButtonComponent>;
  let component: ButtonComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('default inputs', () => {
    it('should use default values', () => {
      expect(component.variant()).toBe('primary');
      expect(component.size()).toBe('md');
      expect(component.disabled()).toBe(false);
      expect(component.loading()).toBe(false);
    });

    it('should compute default classes', () => {
      expect(component.classes()).toEqual({
        btn: true,
        'btn--primary': true,
        'btn--md': true,
        'btn--loading': false,
      });
    });
  });

  describe('custom inputs', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('variant', 'secondary');
      fixture.componentRef.setInput('size', 'lg');
      fixture.componentRef.setInput('loading', true);
      fixture.componentRef.setInput('disabled', true);

      fixture.detectChanges();
    });

    it('should update input signals', () => {
      expect(component.variant()).toBe('secondary');
      expect(component.size()).toBe('lg');
      expect(component.loading()).toBe(true);
      expect(component.disabled()).toBe(true);
    });

    it('should recompute classes', () => {
      expect(component.classes()).toEqual({
        btn: true,
        'btn--secondary': true,
        'btn--lg': true,
        'btn--loading': true,
      });
    });
  });

  describe('classes()', () => {
    it('should update when variant changes', () => {
      fixture.componentRef.setInput('variant', 'danger');
      fixture.detectChanges();

      expect(component.classes()['btn--danger']).toBe(true);
      expect(component.classes()['btn--primary']).toBeUndefined();
    });

    it('should update when size changes', () => {
      fixture.componentRef.setInput('size', 'sm');
      fixture.detectChanges();

      expect(component.classes()['btn--sm']).toBe(true);
      expect(component.classes()['btn--md']).toBeUndefined();
    });

    it('should add loading class when loading is true', () => {
      fixture.componentRef.setInput('loading', true);
      fixture.detectChanges();

      expect(component.classes()['btn--loading']).toBe(true);
    });

    it('should remove loading class when loading is false', () => {
      fixture.componentRef.setInput('loading', false);
      fixture.detectChanges();

      expect(component.classes()['btn--loading']).toBe(false);
    });
  });
});
