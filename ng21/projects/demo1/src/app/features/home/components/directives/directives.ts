import { Component } from '@angular/core';
import { Highlight } from '../../../../core/directives/highlight';
import { Card } from '../../../../core/components/card/card';
import { Show } from '../../../../core/directives/show';

@Component({
  selector: 'fox-directives',
  imports: [Highlight, Show, Card],
  template: ` <fox-card> 
    <p [foxHighlight]="'bisque'">Uso de directivas de atributo</p>
    <p *foxShow="isVisible">Contenido visible</p>
    <button (click)="isVisible = !isVisible">Toggle visible</button>
  </fox-card> `,
  styles: ``,
})
export class Directives {
  isVisible = false
}
