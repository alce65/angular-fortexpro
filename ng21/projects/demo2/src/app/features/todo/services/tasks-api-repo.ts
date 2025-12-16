import { inject, Injectable } from '@angular/core';
import { Task, TaskDTO } from '../types/task';
import { Repo } from '../../../core/types/repo';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TasksApiRepo implements Repo<Task, TaskDTO> {
  private readonly url = environment.apiUrl + '/tasks';
  private readonly http = inject(HttpClient);

  getAll(): Observable<Task[]> {
    console.log(this.url);
    return this.http.get<Task[]>(this.url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError(() => error);
      }),
    );
  }
  getById(id: Task['id']): Observable<Task> {
    return this.http.get<Task>(this.url + '/' + id);
  }
  add(newItem: TaskDTO): Observable<Task> {
    return this.http.post<Task>(this.url, newItem);
  }
  update(id: Task['id'], updatedItem: Partial<TaskDTO>): Observable<Task> {
    return this.http.patch<Task>(this.url + '/' + id, updatedItem);
  }
  delete(id: Task['id']): Observable<void> {
    return this.http.delete(this.url + '/' + id).pipe(map(() => undefined));
  }
}
