import { Component, OnDestroy, OnInit } from '@angular/core';
import { Card } from '../../../../../core/components/card/card';

@Component({
  selector: 'fox-info',
  imports: [Card],
  template: `
    <fox-card>
      <h2>Info Component</h2>
      <p>Component info cargado y descargado dinámicamente</p>
    </fox-card>
  `,
  styles: ``,
})
export class InfoComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log('On Init Info');
  }
  ngOnDestroy(): void {
    console.log('On Destroy Info');
  }
}
