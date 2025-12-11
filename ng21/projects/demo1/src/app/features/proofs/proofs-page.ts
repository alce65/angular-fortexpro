import { Component } from '@angular/core';
import { CounterOld } from './components/counter-old/counter';
import { CounterOldAsync } from './components/counter-old -async/counter';
import { CounterAsync } from "./components/counter/counter";

@Component({
  selector: 'fox-proofs-page',
  imports: [CounterOld, CounterOldAsync, CounterAsync],
  template: `
    <section>
      <h2>Pruebas</h2>
      <fox-counter-old />
      <fox-counter-old-async />
      <fox-counter-async />
    </section>
  `,
  styles: `
    section {
      padding: 1rem;
      margin-block: 1rem;
    }
  `,
})
export default class ProofsPage {}
