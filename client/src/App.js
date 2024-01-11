import React, { useEffect, useState } from "react";
import { getTodos } from "./Api/api";

import TaskHeader from "./components/TaskHeader/TaskHeader";
import TodoInput from "./components/TodoInput/TodoInput";
import TodosList from "./components/TodosList/TodosList";
import "./App.css";
import { Route, Routes } from "react-router-dom";
const apiStatusConstants = {
  pending: "PENDING",
  success: "SUCCESS",
  failure: "FAILED",
};

const App = () => {
  const [todosList, setTodosList] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.pending);

  useEffect(() => getTodosFromApi(), []);

  async function getTodosFromApi() {
    setApiStatus(apiStatusConstants.pending);
    try {
      const response = await getTodos();
      const { data } = await response.data;
      setTodosList(data);
      setApiStatus(apiStatusConstants.success);
    } catch (error) {
      setApiStatus(apiStatusConstants.failure);
      console.log(error);
    }
  }










  const activeTodosList =
    todosList.length !== 0
      ? todosList.filter((eachTodo) => eachTodo.completed === true)
      : [];

  const InActiveTodosList =
    todosList.length !== 0
      ? todosList.filter((eachTodo) => eachTodo.completed === false)
      : [];

  return (
    <div className="Todo-container">
      <TaskHeader todosList={todosList} />
      <TodoInput fetchTodos={getTodosFromApi} />
      <hr
        style={{
          width: "90%",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "0px",
          height: "3px",
          backgroundColor: "#fff",
          marginBottom: "0px",
        }}
      />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <TodosList
              fetchTodos={getTodosFromApi}
              apiStatus={apiStatus}
              todosList={InActiveTodosList}
            />
          }
        />
        <Route
          path="/completed"
          exact
          element={
            <TodosList
              fetchTodos={getTodosFromApi}
              apiStatus={apiStatus}
              todosList={activeTodosList}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
