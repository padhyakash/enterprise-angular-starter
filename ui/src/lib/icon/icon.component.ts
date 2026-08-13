import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { IconName, IconSize } from './icon.types';

@Component({
  selector: 'lib-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  readonly name = input.required<IconName>();

  readonly size = input<IconSize>('md');

  readonly label = input('');
}
