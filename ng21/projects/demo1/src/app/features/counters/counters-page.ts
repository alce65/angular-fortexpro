import { Component } from '@angular/core';
import { CountersWrapper } from './counters-wrapper/counters-wrapper';

@Component({
  selector: 'fox-counters-page',
  imports: [CountersWrapper],
  template: `
    <section>
      <h2>Counters Page</h2>
      <fox-counters-wrapper />
    </section>
  `,
  styles: `
    section {
      padding: 1rem;
      margin-block: 1rem;
    }
  `,
})
export default class CountersPage {}
