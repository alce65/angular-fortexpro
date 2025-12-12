import { Observable, of } from "rxjs";
import { Task } from "../types/task";

const TASKS: Task[] = [
  { id: 1, title: 'Crear el proyecto', owner: 'Ana', isCompleted: false },
  { id: 2, title: 'Testar el proyecto', owner: 'Luis', isCompleted: true },
  { id: 3, title: 'Subir a producción', owner: 'Marta', isCompleted: false },
];

export const getTasks = async (): Promise<Task[]> => {
  return TASKS;
}

export const getTasksRx = (): Observable<Task[]> => {
  return of(TASKS);
}
