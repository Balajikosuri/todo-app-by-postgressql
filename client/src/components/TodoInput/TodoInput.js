import React, { useState } from "react";
import { addTodo } from "../../Api/api";
import "./index.css";
// import { addTodo } from "../../api/api";

const TodoInput = () => {
  const [todoDescInput, setTodoDescInput] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
  };

  const handleAddTodo = async (des) => {
    const data = {
      description: todoDescInput,
    };
    if (todoDescInput !== "") {
      await addTodo(data);
      setTodoDescInput("");
    } else {
      alert("Please Add Your Task");
    }
  };
  const handleTodoDesInput = (e) => {
    setTodoDescInput(e.target.value);
  };

  return (
    <form onSubmit={handleForm} className="TodoInput">
      <input
        value={todoDescInput}
        type="text"
        placeholder="Enter a Task ...."
        onChange={(e) => handleTodoDesInput(e)}
        className="todo-desc-input"
      />
      <button
        onClick={() => handleAddTodo(todoDescInput)}
        className="add-task-btn"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoInput;
