import { Injectable } from '@angular/core';
import { Repo } from '../../../core/types/repo';
import { Task, TaskDTO } from '../types/task';
import { TASKS } from './tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InMemoryRepo implements Repo<Task, TaskDTO> {
  private _data: Task[] = TASKS;

  get data() {
    return this._data;
  }

  private generateId(): number {
    return this._data.length ? Math.max(...this._data.map((t) => Number(t.id) || 0)) + 1 : 1;
  }

  getAll(): Observable<Task[]> {
    console.log('GET ALL')
    return of([...this._data]);
  }
  getById(id: Task['id']): Observable<Task> {
    const task = this._data.find((t) => t.id === id);
    if (!task) throw new Error('Task not found');
    return of(task);
  }

  add(item: TaskDTO): Observable<Task> {
    const newTask: Task = { ...item, id: this.generateId() };
    this._data.push(newTask);
    console.log(this._data)
    return of(newTask);
  }

  update(id: Task['id'], item: TaskDTO): Observable<Task> {
    const index = this._data.findIndex((t) => t.id === id);
    if (index !== -1) {
      this._data[index] = { ...item, id: this._data[index].id };
      return of(this._data[index]);
    }
    throw new Error('Task not found');
  }
  delete(id: Task['id']): Observable<void> {
    const index = this._data.findIndex((t) => t.id === id);
    if (index !== -1) {
      this._data.splice(index, 1);
      return of(undefined);
    }
    throw new Error('Task not found');
  }
}
