import { Component, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { TaskForm } from '../task-form/task-form';
import { TaskItem } from '../task-item/task-item';
import { Task, TaskDTO } from '../../types/task';
import { JsonPipe } from '@angular/common';
import { TasksLocalRepo } from '../../services/tasks-local-repo';

@Component({
  selector: 'fox-tasks-list',
  imports: [TaskForm, TaskItem, JsonPipe],

  template: `
    <details #details>
      <summary>Añadir tarea</summary>
      <fox-task-form (createEvent)="add($event)" />
    </details>

    <ul>
      @for (task of tasks(); track task.id) {
        <li>
          <fox-task-item
            [task]="task"
            (deleteEvent)="delete($event)"
            (updateEvent)="update($event)"
          />
        </li>
      }
    </ul>

    <pre>
    {{ tasks() | json }}
    </pre
    >
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
export class TasksList implements OnInit {
  private repo = inject(TasksLocalRepo);
  protected readonly tasks = signal<Task[]>([]);
  protected readonly details = viewChild<ElementRef<HTMLDetailsElement>>('details');

  ngOnInit(): void {
    this.load();
  }

  protected load() {
    const sub = this.repo.getAll().subscribe((tasksData) => {
      console.log('GET ALL Subscribe');
      this.tasks.set(tasksData);
    });
    sub.unsubscribe();
  }

  protected delete(task: Task) {
    // Estrategia optimista
    // Syncrono -> estado this.tasks
    // Asyncrono / repo

    // Estrategia no optimista
    // Asyncrono / repo
    // Syncrono -> estado this.tasks

    const sub = this.repo.delete(task.id).subscribe({
      next: () => {
        console.log('Delete subscribe');
        const data = this.tasks().filter((t) => t.id !== task.id);
        this.tasks.set(data);
      },
      error: (error: Error) => {
        console.log(error.message);
      },
    });
    sub.unsubscribe();
  }

  protected update(updatedTask: Task) {
    const { id, ...data } = updatedTask;
    const sub = this.repo.update(id, data).subscribe({
      next: (updateTask) => {
        const data = this.tasks().map((t) => (t.id === updateTask.id ? updateTask : t));
        this.tasks.set(data);
      },
      error: (error: Error) => {
        console.log(error.message);
      },
    });
    sub.unsubscribe();
  }

  protected add(data: TaskDTO) {
    const newTaskDTO: TaskDTO = {
      ...data,
      isCompleted: false,
    };

    const sub = this.repo.add(newTaskDTO).subscribe({
      next: (newTask) => {
        console.log('NEW', newTask);
        this.tasks.update((tasks) => [...tasks, newTask]);
      },
      error: (error: Error) => {
        console.log(error.message);
      },
    });
    sub.unsubscribe();
    // cerrar el details
    if (this.details()?.nativeElement.open) {
      this.details()?.nativeElement.removeAttribute('open');
    }
  }
}
