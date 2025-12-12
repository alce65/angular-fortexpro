import { Component, input } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'fox-layout',
  imports: [Header, Footer],
  template: `
    <fox-header [appTitle]="appTitle()">
      <ng-content select="fox-menu"></ng-content>
    </fox-header>
    <main>
      <ng-content></ng-content>
    </main>
    <fox-footer />
  `,
  styles: `main {
      padding: 1rem;
    }`,
})
export class Layout {

  appTitle = input.required<string>()

}
