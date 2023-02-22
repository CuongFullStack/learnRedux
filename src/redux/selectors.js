// export const todoListSelector = (state) => {
//   const todosRemaining = state.todoList.filter((todo) => {
//     // const searchText = searchTextSelector(state);
//     return todo.name.toLowerCase().includes(state.filters.search.toLowerCase());
//   }); ///Lọc kết quả trả về

//   return todosRemaining;
// };

// if (status === "All")
//   return (
//     todo.name.includes(searchText) &&
//     (priority.length ? priority.includes(todo.priority) : true)
//   );

// return (
//   todo.name.includes(searchText) &&
//   (status === "Completed" ? todo.completed : !todo.completed) &&
//   (priority.length ? priority.includes(todo.priority) : true)
// );

import { createSelector } from "@reduxjs/toolkit"; //Dùng để viết selector phụ thuocj cá selector khác
export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const priorityFilterSelector = (state) => state.filters.priority;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  priorityFilterSelector,
  (todoList, searchText, status, priority) => {
    return todoList.filter((todo) => {
      return (
        (todo.name.includes(searchText) &&
          (priority.length ? priority.includes(todo.priority) : true) &&
          status === "All") ||
        (status === "Completed" ? todo.completed : !todo.completed)
      );
    });
  }
);
