import { Component, signal } from '@angular/core';

@Component({
  selector: 'fox-footer',
  imports: [],
  template: `
    <footer>
      <address>
        <p>{{ autor() }}</p>
        <p>{{ brand() }}</p>
        <p>{{ today().getFullYear() }}</p>
      </address>
    </footer>
  `,
  styles: `
     :host {
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 2px solid #343a40;
      margin-top: 1.5rem;
      min-height: 10vh;
    }
    footer {
     text-align: center;

    }
    address {
      font-style: normal;
    }
  `,
})
export class Footer {
  protected readonly autor = signal<string>('Alejandro Cerezo');
  protected readonly brand = signal<string>('FortexPro');
  protected readonly today = signal<Date>(new Date());

}
