import React from "react";
import "./index.css";
import { getActiveTasksCount } from "../../utils/utils";
import { DNA } from "react-loader-spinner";
import TodoItem from "../TodoItem/TodoItem";
const apiStatusConstants = {
  pending: "PENDING",
  success: "SUCCESS",
  failure: "FAILED",
};
const TodosList = ({ todosList, apiStatus, fetchTodos }) => {
  const renderLoader = () => {
    return (
      <div className="empty-tasks-container">
        <DNA />
      </div>
    );
  };

  const renderFailure = () => {
    return (
      <div className="empty-tasks-container">
        <img
          className="err-img"
          src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-connected_516790-1760.jpg?w=740"
          alt="error"
        />
      </div>
    );
  };

  const renderSuccess = () => {
    return (
      <>
        {todosList.length === 0 ? (
          <div className="empty-tasks-container">
            <h4 className="empty-active-tasks">
              You currently have <span>{getActiveTasksCount(todosList)}</span>{" "}
              tasks. Add a task to get started!
            </h4>
          </div>
        ) : (
          <>
            {todosList.map((eachTodo) => (
              <TodoItem
                fetchTodos={fetchTodos}
                key={eachTodo.id}
                todo={eachTodo}
              />
            ))}
          </>
        )}
      </>
    );
  };

  const todosListResult = () => {
    switch (apiStatus) {
      case apiStatusConstants.pending:
        return renderLoader();
      case apiStatusConstants.success:
        return renderSuccess();
      case apiStatusConstants.failure:
        return renderFailure();

      default:
        return null;
    }
  };

  return (
    <div className="TodosListContainer">
      <ul style={{ padding: "0px" }}>{todosListResult()}</ul>
    </div>
  );
};

export default TodosList;
