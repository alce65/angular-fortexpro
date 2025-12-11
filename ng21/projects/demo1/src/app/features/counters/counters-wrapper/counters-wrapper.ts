import { Component, signal } from '@angular/core';
import { Counter } from '../counter/counter';

export interface CounterType {
  id: number;
  value: number;
}

@Component({
  selector: 'fox-counters-wrapper',
  imports: [Counter],
  template: `
    <p>Total de clicks: {{ totalClicks() }}</p>
    <p>Valor total: {{ totalValue() }}</p>
    <fox-counter [id]="103" (countEvent)="handleCounter($event)" />
    <fox-counter [id]="262" (countEvent)="handleCounter($event)" />
  `,
  styles: ``,
})
export class CountersWrapper {
  protected readonly totalClicks = signal(0);
  protected readonly totalValue = signal(0);

  protected counters: CounterType[] = [
    { id: 103, value: 0 },
    { id: 262, value: 0 },
  ];

  protected handleCounter(updatedCounter: CounterType) {
    this.totalClicks.update((total) => total + 1);

    console.log(updatedCounter);
    const totalArray = this.counters.map((item) =>
      item.id === updatedCounter.id ? updatedCounter.value : item.value,
    );

    console.log(totalArray);
    const total = totalArray.reduce((a, b) => a + b);
    console.log('Total:', total);
  }
}
