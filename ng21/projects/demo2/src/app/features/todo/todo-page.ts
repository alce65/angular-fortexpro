import { Component } from '@angular/core';
import { TasksList } from './components/tasks-list/tasks-list';
import { AppStorage, AppStorageSimple } from '../../core/services/storage';

@Component({
  selector: 'fox-todo-page',
  providers: [
    // {
    //   provide: AppStorage,
    //   useFactory: () => {
    //     console.log('AppStorage Factory');
    //     return new AppStorage<Task[]>('tasks');
    //   },
    // },
    AppStorage,
    { provide: 'storeName', useValue: 'Courses' },
    AppStorageSimple
  ],
  imports: [TasksList],
  template: `
    <section>
      <h2>Tareas</h2>
      <fox-tasks-list />
    </section>
  `,
  styles: `
    section {
      padding: 1rem;
      margin-block: 1rem;
    }
  `,
})
class TodoPage {}
export default TodoPage;
