// export const addTodoAction = {
//   type: "todoList/addTodo",
//   payload: {},
// };

export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const searchFillterChange = (text) => {
  return {
    type: "filters/searchFillterChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filters/statusFilterChange",
    payload: status,
  };
};

export const priorityFilterChange = (priority) => {
  return {
    type: "filters/priorityFilterChange",
    payload: priority,
  };
};

export const toggleTodoStatus = (todoId) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: todoId,
  };
};
