export interface ITodo {
  text: string;
  id: number;
  isFinished: boolean;
}

export interface IStore {
  todos: ITodo[] | [];
  addTask: (todo: ITodo) => void;
  deleteTask: (id: number) => void;
  toggleIsFinished: (id: number) => void;
}
