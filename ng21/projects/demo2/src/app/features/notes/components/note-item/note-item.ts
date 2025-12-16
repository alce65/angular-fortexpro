import { Component, input, output } from '@angular/core';
import { Note } from '../../types/notes';
import { Card } from '../../../../core/components/card/card';

@Component({
  selector: 'fox-note-item',
  imports: [Card],
  template: `
    <fox-card [title]="note().title">
      <p>Responsable: {{ note().owner }}</p>
      <label>
        <input type="checkbox" [checked]="note().isCompleted" (change)="handleEmitChange()" />
        Completada
      </label>
      <button (click)="handleEmitDelete()">Borrar</button>
    </fox-card>
  `,
  styles: ``,
})
export class NoteItem {
  readonly note = input.required<Note>();
  protected readonly deleteEvent = output<Note>();
  protected readonly updateEvent = output<Note>();

  protected handleEmitDelete() {
    this.deleteEvent.emit(this.note());
  }

  protected handleEmitChange() {
    const updatedNote: Note = {
      ...this.note(),
      isCompleted: !this.note().isCompleted,
    };
    this.updateEvent.emit(updatedNote);
  }
}
