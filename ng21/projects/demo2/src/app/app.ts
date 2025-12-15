import { Component, InjectionToken, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './core/components/menu/menu';
import { Layout } from './core/components/layout/layout';
import { menuOptions } from './app.routes';

export const TITLE = new InjectionToken<WritableSignal<string>>('App title')

@Component({
  selector: 'fox-root',
  imports: [RouterOutlet, Menu, Layout],

  providers: [
    {
      provide: TITLE,
      useValue: signal('Angular 21 Demo 2')
    }
  ],

  template: ` <fox-layout class="layout">
    <fox-menu [options]="options" />
    <router-outlet />
  </fox-layout>`,

  styles: [],
})
export class App {
  protected options = menuOptions;
}
