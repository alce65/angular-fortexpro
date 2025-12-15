import { Component, inject } from '@angular/core';
import { Time } from '../../core/services/time';

@Component({
  selector: 'fox-about-page',
  imports: [],
  template: `
    <section>
      <h2>About Page</h2>
      <p>{{ this.time.getTimestamp() }}</p>
    </section>
  `,
  styles: `
    section {
      padding: 1rem;
      margin-block: 1rem;
    }
  `,
})
export default class AboutPage {
  protected readonly time = inject(Time);
}
