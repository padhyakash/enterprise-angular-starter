import { Component } from '@angular/core';
import { ButtonComponent, CardComponent, IconComponent, InputComponent } from '@enterprise/ui';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, CardComponent, InputComponent, IconComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
