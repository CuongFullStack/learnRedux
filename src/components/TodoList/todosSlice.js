// const initState = [
//   {
//     id: 1,
//     name: "ABC",
//     completed: false,
//     priority: "Medium",
//   },
//   {
//     id: 2,
//     name: "DEF",
//     completed: true,
//     priority: "Medium",
//   },
//   {
//     id: 3,
//     name: "XAU",
//     completed: false,
//     priority: "Medium",
//   },
// ];

// //Nên chia reducer thành các phần nhỏ để code dễ nhìn

// const todosListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     case "todoList/toggleTodoStatus": //update status
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );

//     default:
//       return state;
//   }
// };

// export default todosListReducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const todoListSlice = createSlice({
  name: "todoList",
  initialState: { status: "idle", todos: [] }, // [] => {status:'', todos: []}, //idle: Rảnh rỗi
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.status = "idle";
      })
      .addCase(addNewTodo.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
        state.status = "idle";
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const currentTodo = state.todos.find(
          (todo) => todo.id === action.payload.id
        );
        currentTodo.completed = !currentTodo.completed;

        state.status = "idle";
      });
  },
});

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch("/api/todos");
  const data = await res.json();
  return data.todos;
});

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (updatedTodoId) => {
    const res = await fetch("/api/updateTodo", {
      method: "POST",
      body: JSON.stringify(updatedTodoId),
    });
    const data = await res.json();
    return data.todos;
  }
);

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async (newTodo) => {
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
    });
    const data = await res.json();
    // console.log(data);
    return data.todos;
  }
);

/**
 * 3 trạng thái của promise tạo bởi createAsyncThunk
 * - =>todos/fetchTodos/pending
 * - =>todos/fetchTodos/fullfilled
 * - =>todos/fetchTodos/rejected
 */

export default todoListSlice;

// ví dụ
// export function addTodo(todo) {
//   return function addTodosThunk(dispatch, getState) {
//     todo.name = "cuonng test";
//     //Thunk function can thiệp vào dispath một action trước khi nó được gửi đi
//     //Thực tế sử dụng để viết code bất đồng bộ
//     dispatch(todoListSlice.actions.addTodo(todo));
//   };
// }
