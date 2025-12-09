import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'fox-root',
  imports: [RouterOutlet],
  template: `
    <h1>{{ title() }}</h1>

    <router-outlet />
  `,
  styles: [],
})
export class App {
protected readonly title = signal('Angular 21 Demo 1');

}
