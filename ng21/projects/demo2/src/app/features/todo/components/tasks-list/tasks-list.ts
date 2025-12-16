import { Component, ElementRef, inject, OnDestroy, OnInit, signal, viewChild } from '@angular/core';
import { TaskForm } from '../task-form/task-form';
import { TaskItem } from '../task-item/task-item';
import { Task } from '../../types/task';
import { JsonPipe } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { TasksStore } from '../../store/tasks-store';

@Component({
  selector: 'fox-tasks-list',
  imports: [TaskForm, TaskItem, JsonPipe],

  template: `
    @if (error()) {
      <p>{{ error() }}</p>
    } @else {
      <details #details>
        <summary>Añadir tarea</summary>
        <fox-task-form (createEvent)="add()" />
      </details>

      <ul>
        @for (task of tasks(); track task.id) {
          <li>
            <fox-task-item [task]="task" />
          </li>
        }
      </ul>

      <pre>
    {{ tasks() | json }}
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
export class TasksList implements OnInit, OnDestroy {
  // private repo = inject(TasksApiRepo);
  private store = inject(TasksStore);

  protected readonly tasks = signal<Task[]>([]);
  protected readonly error = signal<string | null>(null);
  protected readonly details = viewChild<ElementRef<HTMLDetailsElement>>('details');
  private subs$ = new Subject<void>();

  ngOnInit(): void {
    const { data$, errors$ } = this.store.getState();
    data$.pipe(takeUntil(this.subs$)).subscribe((data) => this.tasks.set(data));
    errors$.pipe(takeUntil(this.subs$)).subscribe((errors) => this.error.set(errors.load as string));

    // this.load();
    this.store.load();
  }

  ngOnDestroy(): void {
    this.subs$.next();
    this.subs$.complete()
  }

  // protected load() {
  //   const sub = this.repo.getAll().subscribe({
  //     next: (tasksData) => {
  //       console.log('GET ALL Subscribe');
  //       this.tasks.set(tasksData);
  //       this.error.set(null);
  //     },
  //     error: (error: Error) => {
  //       console.log('List error', error.message);
  //       this.error.set(error.message);
  //     },
  //   });
  //   this.subs.push(sub);
  // }

  // protected delete(task: Task) {
  // Estrategia optimista
  // Syncrono -> estado this.tasks
  // Asyncrono / repo

  // Estrategia no optimista
  // Asyncrono / repo
  // Syncrono -> estado this.tasks

  // const sub = this.repo.delete(task.id).subscribe({
  //   next: () => {
  //     console.log('Delete subscribe');
  //     const data = this.tasks().filter((t) => t.id !== task.id);
  //     this.tasks.set(data);
  //   },
  //   error: (error: Error) => {
  //     console.log('List error', error.message);
  //   },
  // });
  //this.subs.push(sub);
  //}

  //protected update(updatedTask: Task) {
  // const { id, ...data } = updatedTask;
  // const sub = this.repo.update(id, data).subscribe({
  //   next: (updateTask) => {
  //     const data = this.tasks().map((t) => (t.id === updateTask.id ? updateTask : t));
  //     this.tasks.set(data);
  //   },
  //   error: (error: Error) => {
  //     console.log('List error', error.message);
  //   },
  // });
  // this.subs.push(sub);
  //}

  protected add() {
    // const newTaskDTO: TaskDTO = {
    //   ...data,
    //   isCompleted: false,
    // };

    // const sub = this.repo.add(newTaskDTO).subscribe({
    //   next: (newTask) => {
    //     console.log('NEW', newTask);
    //     this.tasks.update((tasks) => [...tasks, newTask]);
    //   },
    //   error: (error: Error) => {
    //     console.log('List error', error.message);
    //   },
    // });
    // this.subs.push(sub);

    // cerrar el details
    if (this.details()?.nativeElement.open) {
      this.details()?.nativeElement.removeAttribute('open');
    }
  }
}
