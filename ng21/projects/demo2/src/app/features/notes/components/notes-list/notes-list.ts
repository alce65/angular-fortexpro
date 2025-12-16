import { Component, ElementRef, inject, OnDestroy, OnInit, signal, viewChild } from '@angular/core';
import { NoteForm } from '../note-form/note-form';
import { NoteItem } from '../note-item/note-item';
import { Note, NoteDTO } from '../../types/notes';
import { JsonPipe } from '@angular/common';
import { NotesApiRepo } from '../../services/notes-api-repo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fox-notes-list',
  imports: [NoteForm, NoteItem, JsonPipe],

  template: `
    @if (error()) {
      <p>{{ error() }}</p>
    } @else {
      <details #details>
        <summary>Añadir tarea</summary>
        <fox-note-form (createEvent)="add($event)" />
      </details>

      <ul>
        @for (note of notes(); track note.id) {
          <li>
            <fox-note-item
              [note]="note"
              (deleteEvent)="delete($event)"
              (updateEvent)="update($event)"
            />
          </li>
        }
      </ul>

      <pre>
    {{ notes() | json }}
    </pre
      >
    }
  `,
  styles: `
    details {
      margin-block: 1.5rem;
    }
    ul {
      list-style: none;
      padding: 0;
    }
  `,
})
export class NotesList implements OnInit, OnDestroy {
  private repo = inject(NotesApiRepo);
  protected readonly notes = signal<Note[]>([]);
  protected readonly error = signal<string | null>(null);
  protected readonly details = viewChild<ElementRef<HTMLDetailsElement>>('details');
  private subs: Subscription[] = [];

  ngOnInit(): void {
    this.load();
  }
  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  protected load() {
    const sub = this.repo.getAll().subscribe({
      next: (notesData) => {
        console.log('GET ALL Subscribe');
        this.notes.set(notesData);
        this.error.set(null);
      },
      error: (error: Error) => {
        console.log('List error', error.message);
        this.error.set(error.message);
      },
    });
    this.subs.push(sub);
  }

  protected delete(note: Note) {
    // Estrategia optimista
    // Syncrono -> estado this.notes
    // Asyncrono / repo

    // Estrategia no optimista
    // Asyncrono / repo
    // Syncrono -> estado this.notes

    const sub = this.repo.delete(note.id).subscribe({
      next: () => {
        console.log('Delete subscribe');
        const data = this.notes().filter((t) => t.id !== note.id);
        this.notes.set(data);
      },
      error: (error: Error) => {
        console.log('List error', error.message);
      },
    });
    this.subs.push(sub);
  }

  protected update(updatedNote: Note) {
    const { id, ...data } = updatedNote;
    const sub = this.repo.update(id, data).subscribe({
      next: (updateNote) => {
        const data = this.notes().map((t) => (t.id === updateNote.id ? updateNote : t));
        this.notes.set(data);
      },
      error: (error: Error) => {
        console.log('List error', error.message);
      },
    });
    this.subs.push(sub);
  }

  protected add(data: NoteDTO) {
    const newNoteDTO: NoteDTO = {
      ...data,
      isCompleted: false,
    };

    const sub = this.repo.add(newNoteDTO).subscribe({
      next: (newNote) => {
        console.log('NEW', newNote);
        this.notes.update((notes) => [...notes, newNote]);
      },
      error: (error: Error) => {
        console.log('List error', error.message);
      },
    });
    this.subs.push(sub);
    // cerrar el details
    if (this.details()?.nativeElement.open) {
      this.details()?.nativeElement.removeAttribute('open');
    }
  }
}
