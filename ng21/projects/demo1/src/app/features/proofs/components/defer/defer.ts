import { Component } from '@angular/core';
import { Card } from '../../../../core/components/card/card';

@Component({
  selector: 'fox-defer',
  imports: [Card],
  template: `
    <fox-card>
      <h3>Defer samples</h3>

      @defer (on timer(3000)) {
        <p>Información diferida</p>
      } @placeholder {
        <p>Contenido aun no cargado</p>
      } @loading {
        <p>Cargando...</p>
      } @error {
        <p>Error al cargar el componente</p>
      }

    </fox-card>
  `,
  styles: ``,
})
export class Defer {}
