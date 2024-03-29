import React, { useState } from "react";
import "./index.css";
import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";
import { deleteTodo, editTodo } from "../../Api/api";

// const handleTogleEdit = () => {};

const TodoItem = ({ todo, fetchTodos }) => {
  const [editOption, setEditOption] = useState(false);

  const handleDeleTodo = async (todoId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this todo?"
    );

    if (confirmed) {
      await deleteTodo(todoId);
      await fetchTodos();
    }
  };

  const toggleCompletion = async (todo) => {
    const completed = todo.completed;
    const todoId = todo.id;
    const todoDesc = todo.description;

    const updateData = {
      description: todoDesc,
      completed: !completed,
    };

    try {
      await editTodo(todoId, updateData);
      await fetchTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const handleBlur = () => {
    setEditOption(true);
  };

  const handleFocus = () => {
    setEditOption(false);
  };

  const handleTodoDesChange = () => {
    fetchTodos();
  };
  // console.log(editOption);
  return (
    <li className="todo-item">
      <button
        onClick={() => toggleCompletion(todo)}
        type="button"
        className="task-comp-incmp-btn"
      >
        {todo.completed ? (
          <FaCheckCircle className="tick" color="green" size={30} />
        ) : (
          <FaCheckCircle className="tick" color="#1a1918" size={30} />
        )}
      </button>
      {!editOption ? (
        <p
          onClick={handleFocus}
          style={{
            textDecoration: `${todo.completed ? "line-through" : ""}`,
            color: `${todo.completed ? "#ffffff90" : ""}`,
          }}
          className="todo-desc"
        >
          {todo.description}
        </p>
      ) : (
        <textarea
          style={{
            backgroundColor: "#ffffff60",
            outline: "none",
            border: "none",
            borderRadius: "6px",
            padding: "8px",
          }}
          className="todo-desc"
          value={todo.description}
          onChange={(e) => handleTodoDesChange(e)}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      )}
      <button onClick={() => handleDeleTodo(todo.id)} className="delete-btn">
        <FaTrashAlt className="hover-on-delete-btn" color="#1a1918" size={26} />
      </button>
    </li>
  );
};

export default TodoItem;
