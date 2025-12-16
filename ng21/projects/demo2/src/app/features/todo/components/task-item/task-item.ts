import { Component, inject, input } from '@angular/core';
import { Task } from '../../types/task';
import { Card } from '../../../../core/components/card/card';
import { TasksStore } from '../../store/tasks-store';

@Component({
  selector: 'fox-task-item',
  imports: [Card],
  template: `
    <fox-card [title]="task().title">
      <p>Responsable: {{ task().owner }}</p>
      <label>
        <input type="checkbox" [checked]="task().isCompleted" (change)="handleEmitChange()" />
        Completada
      </label>
      <button (click)="handleEmitDelete()">Borrar</button>
    </fox-card>
  `,
  styles: ``,
})
export class TaskItem {
  readonly task = input.required<Task>();
  private store = inject(TasksStore);

  // protected readonly deleteEvent = output<Task>();
  // protected readonly updateEvent = output<Task>();

  protected handleEmitDelete() {
    // this.deleteEvent.emit(this.task());
    this.store.delete(this.task().id);
  }

  protected handleEmitChange() {
    const updatedTask: Task = {
      ...this.task(),
      isCompleted: !this.task().isCompleted,
    };
    // this.updateEvent.emit(updatedTask);
    this.store.update(updatedTask);
  }
}
