export interface Note {
  id: number;
  title: string;
  owner: string;
  isCompleted: boolean;
}

export type NoteDTO = Omit<Note, 'id'>

// {
//   title: string;
//   owner: string;
// }
