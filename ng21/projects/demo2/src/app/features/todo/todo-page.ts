import { Component } from '@angular/core';
import { TasksList } from './components/tasks-list/tasks-list';

@Component({
  selector: 'fox-todo-page',
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
