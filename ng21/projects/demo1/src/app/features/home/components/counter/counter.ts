import { Component, signal } from '@angular/core';
import { Card } from '../../../../core/components/card/card';

@Component({
  selector: 'fox-counter',
  imports: [Card],
  template: `
    <fox-card>
      <h3>Contador de clicks</h3>
      <button type="button" [title]="titles[0]" (click)="handleClick(-1)">➖</button>
      <output>{{ counter() }}</output>
      <button type="button" [title]="titles[1]" (click)="handleClick(1)">➕</button>
      <button type="button" [title]="titles[2]" (click)="handleClick(0)">🔄</button>
    </fox-card>
  `,
  styles: `
    :host {
      display: block;
      text-align: center;
    }
    h3 {
      margin-bottom: 1rem;
    }
    button {
      font-size: 1.2rem;
      margin: 0 0.5rem;
    }
  `,
})
export class Counter {
  protected readonly counter = signal(0);
  protected readonly titles = ['Decrementar 1', 'Incrementar 1', 'Reiniciar contador'];

  protected handleClick(num: number) {
    if (num === 0) {
      this.counter.set(0);
    }
    this.counter.update((v: number) => v + num);
    // this.counter.set(this.counter() + num)
  }
}
