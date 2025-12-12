import { Component } from '@angular/core';
import { Greetings } from './components/greetings/greetings';

@Component({
  selector: 'fox-home-page',
  imports: [Greetings],
  template: `
    <section>
      <h2>Home Page</h2>
      <fox-greetings />
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
