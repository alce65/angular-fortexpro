import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TasksErrors, TasksState } from '../types/store';
import { Task, TaskDTO } from '../types/task';
import { TasksApiRepo } from '../services/tasks-api-repo';

const initialTasks: Task[] = [];
const initialErrors: TasksErrors = {};

@Injectable({
  providedIn: 'root',
})
export class TasksStore {
  private tasks$ = new BehaviorSubject(initialTasks);
  private errors$ = new BehaviorSubject(initialErrors);
  private repo = inject(TasksApiRepo);

  getState(): TasksState {
    return {
      data$: this.tasks$.asObservable(),
      errors$: this.errors$.asObservable(),
    };
  }

  setNoErrors(): void {
    this.errors$.next({});
  }

  load(): void {
    this.repo.getAll().subscribe({
      next: (tasksData) => {
        console.log('Store GET ALL Subscribe');
        this.tasks$.next(tasksData);
        this.errors$.next({});
      },
      error: (error: Error) => {
        console.log('Store error', error.message);
        this.errors$.next({
          load: error.message,
        });
      },
    });
  }

  add(data: TaskDTO) {
    const newTaskDTO: TaskDTO = {
      ...data,
      isCompleted: false,
    };

    this.repo.add(newTaskDTO).subscribe({
      next: (newTask) => {
        console.log('Store NEW', newTask);
        this.tasks$.next([...this.tasks$.getValue(), newTask]);
      },
      error: (error: Error) => {
        console.log('List error', error.message);
        this.errors$.next({
          add: error.message,
        });
      },
    });
  }

  update(updatedTask: Task) {
    const { id, ...data } = updatedTask;
    this.repo.update(id, data).subscribe({
      next: (updateTask) => {
        console.log('Store Update', updateTask);
        const data = this.tasks$.getValue().map((t) => (t.id === updateTask.id ? updateTask : t));
        this.tasks$.next(data);
      },
      error: (error: Error) => {
        console.log('Store error', error.message);
        this.errors$.next({
          update: error.message,
        });
      },
    });
  }

  delete(id: Task['id']) {
    this.repo.delete(id).subscribe({
      next: () => {
        console.log('Store Delete', id);
        const data = this.tasks$.getValue().filter((t) => t.id !== id);
        this.tasks$.next(data);
      },
      error: (error: Error) => {
        console.log('Store error', error.message);
        this.errors$.next({
          delete: error.message,
        });
      },
    });
  }
}
