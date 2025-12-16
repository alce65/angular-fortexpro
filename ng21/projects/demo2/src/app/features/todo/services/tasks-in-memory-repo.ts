import { Injectable } from '@angular/core';
import { Repo } from '../../../core/types/repo';
import { Task, TaskDTO } from '../types/task';
import { map, Observable, of, tap } from 'rxjs';
import { TASKS } from './tasks';

@Injectable({
  providedIn: 'root',
})
export class TasksInMemoryRepo implements Repo<Task, TaskDTO> {
  
  
  private tasks = TASKS;
  private tasks$ = of(TASKS);
  private idList = TASKS.map((item) => item.id);

  private createID() {
    const next = Math.max(...this.idList) + 1;
    this.idList.push(next);
    console.log('Values', this.idList);
    return next;
  }

  getAll(): Observable<Task[]> {
    return this.tasks$;
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
    // const data = this.tasks$.getValue()
    // this.tasks$.next([...data, newTask]);

    return this.tasks$.pipe(
      map((data) => [...data, newTask]),
      tap((data) => console.log('Add', data)),
      map(() => newTask),
    );
  }

  update(id: number, updatedItem: Partial<TaskDTO>): Observable<Task> {
    return this.tasks$.pipe(
      map((data) => {
        const index = data.findIndex((task) => task.id === id);
        if (index < 0) throw new Error('Tarea no encontrada');
        data[index] = { ...data[index], ...updatedItem };
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
        return;
      }),
    );
  }
}
