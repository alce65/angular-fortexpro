import { Component } from '@angular/core';

@Component({
  selector: 'fox-card',
  imports: [],
  template: `
    <ng-content select=".card-header"></ng-content>
    <ng-content></ng-content>
    <ng-content select=".card-footer"></ng-content>
  `,
  styles: `
   :host {
      display: block;
      margin: 1rem 0;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
    }`,
})
export class Card {}
