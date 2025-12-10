import { Component } from '@angular/core';
import { Card } from '../../../../core/components/card/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'fox-greetings-ref',
  imports: [Card, FormsModule],
  template: `
    <fox-card>
      <h3>Componente Saludo conn Referencias Locales</h3>
      <p>Two way data binding</p>
      <p>Hola {{ userName.value || 'amigo' }}</p>
      <input #userName type="text" placeholder="Dime tu nombre" [(ngModel)]="userName.value" />
      <button (click)=" userName.value = '' ">Borrar</button>
    </fox-card>
  `,
  styles: ``,
})
export class GreetingsRef {}
