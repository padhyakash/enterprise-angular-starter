import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';

import { InputType } from './input.types';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  private static nextId = 0;

  readonly id = signal(`lib-input-${InputComponent.nextId++}`);

  readonly label = input('');

  readonly placeholder = input('');

  readonly value = input('');

  readonly type = input<InputType>('text');

  readonly hint = input('');

  readonly error = input('');

  readonly disabled = input(false);

  readonly readonly = input(false);

  readonly required = input(false);

  readonly invalid = input(false);

  readonly showPasswordToggle = input(false);
  readonly passwordVisible = signal(false);

  readonly inputType = computed(() => {
    if (this.type() !== 'password') {
      return this.type();
    }

    return this.passwordVisible() ? 'text' : 'password';
  });

  readonly hintId = computed(() => `${this.id()}-hint`);

  readonly errorId = computed(() => `${this.id()}-error`);

  togglePasswordVisibility(): void {
    this.passwordVisible.update((visible) => !visible);
  }
}
