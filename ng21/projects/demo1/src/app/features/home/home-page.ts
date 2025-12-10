import { Component } from '@angular/core';
import { Counter } from './components/counter/counter';
import { Greetings } from './components/greetings/greetings';
import { GreetingsRef } from './components/greetings-ref/greetings-ref';
import { Cycle } from "./components/cycle/cycle";

@Component({
  selector: 'fox-home-page',
  imports: [Counter, Greetings, GreetingsRef, Cycle],
  template: `
    <section>
      <h2>Home Page</h2>
      <fox-counter />
      <fox-greetings />
      <fox-greetings-ref />
      <fox-cycle />
    </section>
  `,
  styles: `
    section {
      padding: 1rem;
      margin-block: 1rem;
    }
  `,
})
export default class HomePage {}
