import axios from "axios";

 const BaseUrl = "https://todo-postgressql-api.onrender.com/todos";
//const BaseUrl = "http://localhost:5000/todos";

export const getTodos = async () => {
  const response = await axios.get(BaseUrl);
  return response;
};

export const getTodoById = async (id) => {
  const response = await axios.get(BaseUrl + "/" + id);
  return response;
};

export const addTodo = async (data) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const response = await axios.post(`${BaseUrl}/add-todo`, data, headers);

  return response;
};

export const editTodo = async (id, data) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const response = await axios.put(
    `${BaseUrl}/update-todo/${id}`,
    data,
    headers
  );
  return response;
};

export const deleteTodo = async (id) => {
  const response = await axios.delete(`${BaseUrl}/delete-todo/${id}`);
  return response;
};
