import { useContext, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { TodoContext } from "./context/todoContext";

function App() {
  const { addTodo } = useContext(TodoContext);
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo({
        id: Math.floor(Math.random() * 10000),
        text: inputData,
        isCompleted: false,
      });
      setInputData("");
    }
  };

  return (
    <div className="root">
      <input
        type="text"
        className="inputBox"
        value={inputData}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <TodoList />
    </div>
  );
}

export default App;
