import { inject, Injectable } from '@angular/core';
import { Note, NoteDTO } from '../types/notes';
import { Repo } from '../../../core/types/repo';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NotesApiRepo implements Repo<Note, NoteDTO> {
  private readonly url = environment.apiUrl + '/notes';
  private readonly http = inject(HttpClient);

  getAll(): Observable<Note[]> {
    console.log(this.url);
    return this.http.get<Note[]>(this.url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return throwError(() => error);
      }),
    );
  }
  getById(id: Note['id']): Observable<Note> {
    return this.http.get<Note>(this.url + '/' + id);
  }
  add(newItem: NoteDTO): Observable<Note> {
    return this.http.post<Note>(this.url, newItem);
  }
  update(id: Note['id'], updatedItem: Partial<NoteDTO>): Observable<Note> {
    return this.http.patch<Note>(this.url + '/' + id, updatedItem);
  }
  delete(id: Note['id']): Observable<void> {
    return this.http.delete(this.url + '/' + id).pipe(map(() => undefined));
  }
}
