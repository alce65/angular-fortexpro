import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  viewChild,
} from '@angular/core';
import { Card } from '../../../../core/components/card/card';

@Component({
  selector: 'fox-cycle',
  imports: [Card],
  template: `
    <fox-card>
      <p #text>Ciclo de vida del componente</p>
    </fox-card>
  `,
  styles: ``,
})
export class Cycle implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  
  // @ViewChild('text', { static: true }) paragraphRef!: ElementRef;

  paragraphRef = viewChild<ElementRef<HTMLElement>>('text')  


  constructor() {
    console.log('Desde el constructor', this.paragraphRef());
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges', changes);
  }

  ngOnInit(): void {
    console.log('Desde onInit', this.paragraphRef());
  }

  ngAfterViewInit(): void {
    console.log('Desde afterViewInit', this.paragraphRef());
  }
  ngOnDestroy(): void {
    console.log('On destroy');
  }
}
