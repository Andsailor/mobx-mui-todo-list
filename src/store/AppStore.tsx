import { makeAutoObservable } from "mobx";
import { ITodo } from "../types";

class AppStore {
  todos: ITodo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTask = (todo: ITodo) => {
    this.todos.push(todo);
  };

  deleteTask = (id: number) => {
    this.todos = this.todos.filter((item) => item.id != id);
  };

  toggleIsFinished = (id: number) => {
    this.todos.map((item) => {
      if (item.id === id) {
        item.isFinished = !item.isFinished;
      }
    });
  };
}

export default AppStore;
