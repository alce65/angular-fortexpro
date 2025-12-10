import { Component, signal } from '@angular/core';

@Component({
  selector: 'fox-header',
  imports: [],
  template: `
    <header>
      <ng-content></ng-content>
      <div class="main-header">
        <div>
          <h1>{{ title() }}</h1>
          <p>{{ subtitle() }}</p>
        </div>
        <div>
          <img src="/favicon.ico" alt="Angular Logo" />
        </div>
      </div>
    </header>
  `,
  styles: `
    :host {
      display: block;
      border-bottom: 2px solid #343a40;
      margin-bottom: 1.5rem;
      min-height: 15vh;
    }
    header {
      height: 100%;
      background-color: #f8f9fa;
      padding: 1rem 2rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .main-header {
        display: grid;
        grid-template-columns: 1fr auto;
      }

      h1 {
        margin: 0;
        color: #343a40;
      }
    }
    p {
      font-style: italic;
      color: #6c757d;
    }
  `,
})
export class Header {
  protected readonly title = signal('Angular 21 Demo 1');
  protected readonly subtitle = signal('Demo 1 - Signals');
}
