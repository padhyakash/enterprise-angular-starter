import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  let fixture: ComponentFixture<IconComponent>;
  let component: IconComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
  });

  describe('Rendering', () => {
    it('creates', () => {
      fixture.componentRef.setInput('name', 'eye');
      fixture.detectChanges();

      expect(component).toBeTruthy();
    });

    it('renders eye', () => {
      fixture.componentRef.setInput('name', 'eye');
      fixture.detectChanges();

      const icon = fixture.nativeElement.querySelector('.icon');
      const svg = icon.querySelector('svg');

      expect(svg).toBeTruthy();
      expect(svg.querySelectorAll('path').length).toBe(1);
      expect(svg.querySelector('circle')).toBeTruthy();
    });

    it('renders eye-off', () => {
      fixture.componentRef.setInput('name', 'eye-off');
      fixture.detectChanges();

      const icon = fixture.nativeElement.querySelector('.icon');
      const svg = icon.querySelector('svg');

      expect(svg).toBeTruthy();
      expect(svg.querySelectorAll('path').length).toBe(4);
      expect(svg.querySelector('circle')).toBeNull();
    });
  });

  describe('Size', () => {
    it('renders sm', () => {
      fixture.componentRef.setInput('name', 'eye');
      fixture.componentRef.setInput('size', 'sm');
      fixture.detectChanges();

      const icon = fixture.nativeElement.querySelector('.icon');

      expect(icon.classList).toContain('icon--sm');
      expect(icon.classList).not.toContain('icon--md');
      expect(icon.classList).not.toContain('icon--lg');
    });

    it('renders md', () => {
      fixture.componentRef.setInput('name', 'eye');
      fixture.componentRef.setInput('size', 'md');
      fixture.detectChanges();

      const icon = fixture.nativeElement.querySelector('.icon');

      expect(icon.classList).toContain('icon--md');
      expect(icon.classList).not.toContain('icon--sm');
      expect(icon.classList).not.toContain('icon--lg');
    });

    it('renders lg', () => {
      fixture.componentRef.setInput('name', 'eye');
      fixture.componentRef.setInput('size', 'lg');
      fixture.detectChanges();

      const icon = fixture.nativeElement.querySelector('.icon');

      expect(icon.classList).toContain('icon--lg');
      expect(icon.classList).not.toContain('icon--sm');
      expect(icon.classList).not.toContain('icon--md');
    });
  });

  describe('Accessibility', () => {
    it('decorative icon is aria-hidden', () => {
      fixture.componentRef.setInput('name', 'eye');
      fixture.detectChanges();

      const icon = fixture.nativeElement.querySelector('.icon');

      expect(icon.getAttribute('aria-hidden')).toBe('true');
      expect(icon.getAttribute('role')).toBeNull();
      expect(icon.getAttribute('aria-label')).toBeNull();
    });

    it('labelled icon has role="img"', () => {
      fixture.componentRef.setInput('name', 'eye');
      fixture.componentRef.setInput('label', 'Show password');
      fixture.detectChanges();

      const icon = fixture.nativeElement.querySelector('.icon');

      expect(icon.getAttribute('role')).toBe('img');
      expect(icon.getAttribute('aria-label')).toBe('Show password');
      expect(icon.getAttribute('aria-hidden')).toBeNull();
    });
  });
});
