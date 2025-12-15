import { Component } from '@angular/core';
import { CounterOld } from './components/counter-old/counter';
import { CounterOldAsync } from './components/counter-old -async/counter';
import { CounterAsync } from './components/counter/counter';
import { Defer } from './components/defer/defer';

@Component({
  selector: 'fox-proofs-page',
  imports: [CounterOld, CounterOldAsync, CounterAsync, Defer],
  template: `
    <section>
      <h2>Pruebas</h2>
      <fox-defer />
      <p>Creando espacio</p>
      <p>Creando espacio</p>
      <p>Creando espacio</p>
      <p>Creando espacio</p>
      <p>Creando espacio</p>
      <p>Creando espacio</p>
      <p>Creando espacio</p>
      <p>Creando espacio</p>
      <p>Creando espacio</p>
      <p>Creando espacio</p>
      <p>Creando espacio</p>
      <p>Creando espacio</p>
      <p>Creando espacio</p>
      <p>Creando espacio</p>
      @defer (on viewport; prefetch on idle) {
        <fox-counter-old />
        <fox-counter-old-async />
        <fox-counter-async />
      } @placeholder {
        <p>Componentes aun no cargado</p>
      } @loading {
        <p>Cargando...</p>
      } @error {
        <p>Error al cargar el componente</p>
      }
    </section>
  `,
  styles: `
    section {
      padding: 1rem;
      margin-block: 1rem;

      p {
        padding-block: 2rem
      }
    }
  `,
})
export default class ProofsPage {}
