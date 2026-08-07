import { Component } from '@angular/core';
import { ButtonComponent, CardComponent, InputComponent } from '@enterprise/ui';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, CardComponent, InputComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
