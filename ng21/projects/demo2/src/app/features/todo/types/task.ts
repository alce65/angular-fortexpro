export interface Task {
  id: number;
  title: string;
  owner: string;
  isCompleted: boolean;
}

export type TaskDTO = Omit<Task, 'id'> 

// {
//   title: string;
//   owner: string;
// }
