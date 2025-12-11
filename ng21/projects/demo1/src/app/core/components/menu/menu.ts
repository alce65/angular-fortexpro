import { Component } from '@angular/core';
import { menuOptions } from '../../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'fox-menu',
  imports: [RouterModule],
  template: `
    <nav>
      <ul>
        @for (item of options; track $index) {
          <li>
            <a [routerLink]="item.path" routerLinkActive="active">{{ item.label }}</a>
          </li>
        }
      </ul>
    </nav>
  `,
  styles: `
    nav {
      margin-bottom: 1rem;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      gap: 1rem;
    }
    a {
      color: inherit;
      text-decoration: none;
      font-weight: bold;
    }
    .active {
      text-decoration: underline;
      color: #102337ff;
    }
  `,
})
export class Menu {
  protected options = menuOptions;
}
