import { useContext } from "react";
import { AppStoreContext } from "../store/context/AppContext";

export function useStore() {
  const todoList = useContext(AppStoreContext);
  if (todoList === undefined) {
    throw new Error("Context Provider is required");
  }
  return todoList;
}
