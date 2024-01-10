import React from "react";
import { getActiveTasksCount, getFormattedData } from "../../utils/utils";
import { NavLink } from "react-router-dom";
import "./index.css";
const TaskHeader = ({ todosList }) => {
  return (
    <div className="header">
      <div>
        <p className="date">{getFormattedData()}</p>
        <span className="active-tasks-count">
          {getActiveTasksCount(todosList)} Active Tasks
        </span>
      </div>
      <ul className="tasks-tab-container">
        <li>
          <NavLink className="navLink" to="/">
            incomplete Tasks
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/completed">
            completed Tasks
          </NavLink>
        </li>
        {/* <navLink> </navLink>
        <button type="button" className="tasks-tab-btn">
          incomplete Tasks
        </button>
        <button type="button" className="tasks-tab-btn">
          completed Tasks
        </button> */}
      </ul>
    </div>
  );
};

export default TaskHeader;
