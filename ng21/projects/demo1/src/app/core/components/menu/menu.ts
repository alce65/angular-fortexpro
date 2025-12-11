import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { menuOption } from '../../types/menu-option';

@Component({
  selector: 'fox-menu',
  imports: [RouterModule],
  template: `
    @let menuOptions = options();
    <nav>
      <ul>
        @for (item of menuOptions; track $index) {
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
  // @Input({ required: true}) options!: menuOption[];
  options = input.required<menuOption[]>();
}
