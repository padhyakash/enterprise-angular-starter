import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ButtonSize, ButtonVariant } from './button.types';
import { NgClass } from '@angular/common';

@Component({
  selector: 'lib-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('md');
  readonly disabled = input(false);
  readonly loading = input(false);

  readonly classes = computed(() => ({
    btn: true,
    [`btn--${this.variant()}`]: true,
    [`btn--${this.size()}`]: true,
    'btn--loading': this.loading(),
  }));
}
