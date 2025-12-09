import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './core/components/footer/footer';
import { Header } from './core/components/header/header';

@Component({
  selector: 'fox-root',
  imports: [RouterOutlet, Footer, Header],
  template: ` <fox-header />
    <main>
      <router-outlet />
    </main>
    <fox-footer />`,
  styles: [],
})
export class App {
  // protected readonly title = signal('Angular 21 Demo 1');
}
