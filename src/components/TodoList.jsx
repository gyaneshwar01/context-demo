import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

const TodoList = () => {
  const { todos, removeTodo, toggleTodo } = useContext(TodoContext);

  return todos.map((todo) => (
    <div key={todo.id} className="todo">
      <div
        className="todoText"
        style={{
          textDecoration: todo.isCompleted ? "line-through" : "none",
        }}
      >
        {todo.text}
      </div>
      <div className="todoButtons">
        <button className="todoButton" onClick={() => toggleTodo(todo.id)}>
          {todo.isCompleted ? "Undo" : "Complete"}
        </button>
        <button className="todoButton" onClick={() => removeTodo(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  ));
};

export default TodoList;
