import { useContext, useState } from "react";
import { TodoContext } from "../context/todoContext";

const SingleTodo = ({ todo }) => {
  const { updateTodo, removeTodo, toggleTodo } = useContext(TodoContext);

  const [editText, setEditText] = useState(todo.text);
  const [editing, setEditing] = useState(false);

  const handleEditText = (e) => {
    if (e.key === "Enter") {
      updateTodo({
        ...todo,
        text: editText,
      });
      setEditing(false);
    }
  };

  return (
    <div key={todo.id} className="todo">
      {editing ? (
        <input
          type="text"
          className="todoInput"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleEditText}
        />
      ) : (
        <div
          className="todoText"
          style={{
            textDecoration: todo.isCompleted ? "line-through" : "none",
          }}
        >
          {todo.text}
        </div>
      )}
      <div className="todoButtons">
        <button className="todoButton" onClick={() => toggleTodo(todo.id)}>
          {todo.isCompleted ? "Undo" : "Complete"}
        </button>
        <button className="todoButton" onClick={() => removeTodo(todo.id)}>
          Delete
        </button>
        <button
          className="todoButton"
          onClick={() => {
            setEditText(todo.text);
            setEditing(true);
          }}
          disabled={editing}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default SingleTodo;
