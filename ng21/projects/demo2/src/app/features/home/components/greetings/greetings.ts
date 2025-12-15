import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { Card } from '../../../../core/components/card/card';
import { FormsModule } from '@angular/forms';
import { Time } from '../../../../core/services/time';

@Component({
  selector: 'fox-greetings',
  imports: [Card, FormsModule],
  providers: [
    Time
  ],
  template: `
    <fox-card>
      <h3>Componente Saludo</h3>
      <p>{{this.time.getTimestamp()}}</p>
      <p>Two way data binding</p>
      <p>Hola {{ user() ? user() : 'amigo' }}</p>
      <!-- <input type="text"
        placeholder="Dime tu nombre"
        (input)="handleInput($event)"
        [value]="user()" /> -->
      <!-- <input
        type="text"
        placeholder="Dime tu nombre"
        (ngModelChange)="handleInput($event)"
        [ngModel]="user()"
      /> -->
      <input #inputRef type="text" placeholder="Dime tu nombre" [(ngModel)]="user" />
      <button (click)="clearUserInput()">Borrar</button>
    </fox-card>
  `,
  styles: ``,
})
export class Greetings {
  protected readonly user = signal('');
  protected inputElement = viewChild<ElementRef<HTMLInputElement>>('inputRef');


  // Forma antigua de inyección de dependencias
  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(protected time: Time) {}

  // handleInput(ev: Event) {
  //   this.user.set((ev.target as HTMLInputElement).value);
  // }


  clearUserInput() {
    this.inputElement()?.nativeElement.focus();
    this.user.set('');
  }
}
