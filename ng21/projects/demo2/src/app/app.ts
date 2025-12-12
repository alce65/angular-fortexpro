import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './core/components/menu/menu';
import { Layout } from './core/components/layout/layout';
import { menuOptions } from './app.routes';

@Component({
  selector: 'fox-root',
  imports: [RouterOutlet, Menu, Layout],
  template: ` <fox-layout class="layout" [appTitle]="title()">
    <fox-menu [options]="options" />
    <router-outlet />
  </fox-layout>`,

  styles: [],
})
export class App {
  protected readonly title = signal('Angular 21 Demo 2');
  protected options = menuOptions;
}
