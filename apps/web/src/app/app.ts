import { Component } from '@angular/core';
import { ButtonComponent, CardComponent } from '@enterprise/ui';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, CardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
