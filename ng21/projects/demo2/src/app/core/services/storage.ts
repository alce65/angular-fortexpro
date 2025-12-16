/* eslint-disable @angular-eslint/prefer-inject */
import { Inject, Injectable, Optional } from '@angular/core';
import { Task } from '../../features/todo/types/task';

@Injectable({
  providedIn: 'root',
})
export class AppStorage<T> {
  // private storeName: string
  // private storeType: string

  private storage: globalThis.Storage;

  constructor(
    @Inject('storeName') private storeName: string,
    @Inject('storeType') @Optional() private storeType?: 'local' | 'session',
  ) {
    this.storeType = this.storeType || 'local';
    this.storage = this.storeType === 'local' ? localStorage : sessionStorage;
  }

  get() {
    const initialData = this.storage.getItem(this.storeName);
    if (!initialData) return null;
    return JSON.parse(initialData) as T;
  }

  set(data: T) {
    const finalData = JSON.stringify(data);
    this.storage.setItem(this.storeName, finalData);
  }

  remove() {
    this.storage.removeItem(this.storeName);
  }
}

@Injectable()
//   {
//   providedIn: 'root',
// }
export class AppStorageSimple {
  private storeName = 'Todo';
  private storeType = 'local';
  private storage = localStorage;

  get() {
    const initialData = this.storage.getItem(this.storeName);
    if (!initialData) return null;
    return JSON.parse(initialData) as Task[];
  }

  set(data: Task[]) {
    const finalData = JSON.stringify(data);
    this.storage.setItem(this.storeName, finalData);
  }

  remove() {
    this.storage.removeItem(this.storeName);
  }
}
