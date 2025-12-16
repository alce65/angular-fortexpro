import { Observable } from "rxjs";
import { Task } from "./task";

export interface TasksErrors {
  load?: string;
  add?: string;
  update?: string;
  delete?: string;
}

export interface TasksState {
  data$: Observable<Task[]>;
  errors$: Observable<TasksErrors>;
}
