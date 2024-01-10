import React from "react";
import "./index.css";
import { getActiveTasksCount } from "../../utils/utils";
import { DNA } from "react-loader-spinner";
import TodoItem from "../TodoItem/TodoItem";

const TodosList = ({ todosList, apiStatus }) => {
  return (
    <div className="TodosListContainer">
      <ul style={{ padding: "0px" }}>
        {todosList.length === 0 ? (
          <div className="empty-tasks-container">
            {apiStatus !== "SUCCESS" && todosList.length !== 0 ? (
              <DNA />
            ) : (
              <h4 className="empty-active-tasks">
                You currently have <span>{getActiveTasksCount(todosList)}</span>{" "}
                tasks. Add a task to get started!
              </h4>
            )}
          </div>
        ) : (
          <>
            {todosList.map((eachTodo) => (
              <TodoItem key={eachTodo.id} todo={eachTodo} />
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default TodosList;
