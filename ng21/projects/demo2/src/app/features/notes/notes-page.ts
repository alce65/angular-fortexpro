import { Component } from '@angular/core';
import { NotesList } from './components/notes-list/notes-list';
import { AppStorage, AppStorageSimple } from '../../core/services/storage';

@Component({
  selector: 'fox-notes-page',
  providers: [
    // {
    //   provide: AppStorage,
    //   useFactory: () => {
    //     console.log('AppStorage Factory');
    //     return new AppStorage<Note[]>('notes');
    //   },
    // },
    AppStorage,
    { provide: 'storeName', useValue: 'notes' },
    AppStorageSimple
  ],
  imports: [NotesList],
  template: `
    <section>
      <h2>Notes</h2>
      <fox-notes-list />
    </section>
  `,
  styles: `
    section {
      padding: 1rem;
      margin-block: 1rem;
    }
  `,
})
class NotesPage {}
export default NotesPage;
