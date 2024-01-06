import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import SingleTodo from "./SingleTodo";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return todos.map((todo) => <SingleTodo key={todo.id} todo={todo} />);
};

export default TodoList;
