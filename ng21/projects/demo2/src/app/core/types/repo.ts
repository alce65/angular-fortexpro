import { Observable } from "rxjs";

export interface RepoArrays<T extends { id: string | number }, DTO> {
  getAll(): Observable<T[]>;
  getById(id: T['id']): Observable<T>;  
  add(newItem: DTO): Observable<T[]>;
  update(id: T['id'], updatedItem: Partial<DTO>): Observable<T[]>;
  delete(id: T['id']): Observable<T[]>;
}

export interface Repo<T extends { id: string | number }, DTO> {
  getAll(): Observable<T[]>;
  getById(id: T['id']): Observable<T>;  
  add(newItem: DTO): Observable<T>;
  update(id: T['id'], updatedItem: Partial<DTO>): Observable<T>;
  delete(id: T['id']): Observable<void>;
}