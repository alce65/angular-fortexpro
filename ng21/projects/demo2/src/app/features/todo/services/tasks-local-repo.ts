import { inject, Injectable } from '@angular/core';
import { Repo } from '../../../core/types/repo';
import { Task, TaskDTO } from '../types/task';
import { map, Observable, of } from 'rxjs';
import { TASKS } from './tasks';
import { AppStorage } from '../../../core/services/storage';

@Injectable({
  providedIn: 'root',
})
export class TasksLocalRepo implements Repo<Task, TaskDTO> {
  private storage = inject(AppStorage);
  private tasks$ = of(this.getDataFromStorage());

  private createID() {
    const values = this.getDataFromStorage().map((item) => item.id);
    return Math.max(...values) + 1;
  }

  private getDataFromStorage(): Task[] {
    let data = this.storage.get();
    if (!data || !data.length) {
      data = TASKS;
      this.storage.set(data);
    }
    return data;
  }

  getAll(): Observable<Task[]> {
    return this.tasks$.pipe(
      map(() => {
        return this.getDataFromStorage();
      }),
    );
  }
  getById(id: number): Observable<Task> {
    return this.tasks$.pipe(
      map((tasks) => {
        const task = tasks.find((task) => task.id === id);
        if (!task) throw new Error('Tarea no encontrada');
        return task;
      }),
    );
  }
  add(newItem: TaskDTO): Observable<Task> {
    const newTask: Task = {
      ...newItem,
      id: this.createID(),
    };
    const data = [...(this.storage.get() as Task[]), newTask];
    this.storage.set(data);
    return of(newTask);
  }

  update(id: number, updatedItem: Partial<TaskDTO>): Observable<Task> {
    return this.tasks$.pipe(
      map((data) => {
        const index = data.findIndex((task) => task.id === id);
        if (index < 0) throw new Error('Tarea no encontrada');
        data[index] = { ...data[index], ...updatedItem };
        this.storage.set(data);
        return data[index];
      }),
    );
  }
  delete(id: number): Observable<void> {
    return this.tasks$.pipe(
      map((data) => {
        const item = data.find((task) => task.id === id);
        if (!item) throw new Error('Tarea no encontrada');
        data = data.filter((item) => item.id !== id);
        this.storage.set(data);
        return;
      }),
    );
  }
}
