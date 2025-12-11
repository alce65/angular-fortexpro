import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './core/components/menu/menu';
import { Layout } from './core/components/layout/layout';
import HomePage from "./features/home/home-page";
import AboutPage from "./features/about/about-page";
import ProofsPage from "./features/proofs/proofs-page";

@Component({
  selector: 'fox-root',
  imports: [RouterOutlet, Menu, Layout, HomePage, AboutPage, ProofsPage],
  template: ` <fox-layout class="layout">
    <fox-menu />
    <router-outlet />
    <fox-home-page />
    <fox-proofs-page />
    <fox-about-page />
  </fox-layout>`,

  styles: [],
})
export class App {
  // protected readonly title = signal('Angular 21 Demo 1');
}
