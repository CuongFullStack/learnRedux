// const initState = {
//   filters: {
//     search: "",
//     status: "all",
//     priority: [],
//   },
//   todoList: [
//     {
//       id: 1,
//       name: "ABC",
//       completed: false,
//       priority: "Medium",
//     },
//     {
//       id: 2,
//       name: "DEF",
//       completed: false,
//       priority: "Medium",
//     },
//     {
//       id: 3,
//       name: "XAU",
//       completed: false,
//       priority: "Medium",
//     },
//   ],
// };

// //Nên chia reducer thành các phần nhỏ để code dễ nhìn

// const rootReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return { ...state, todoList: [...state.todoList, action.payload] };

//     case "filters/searchFillterChange":
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           search: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

// export default rootReducer;

//Viết gọn code khi cắt nhỏ reducer
import filtersReducer from "../components/Filters/FiltersSlice";
import todosListReducer from "../components/TodoList/todosSlice";
import { combineReducers } from "redux"; //Dùng combineReducers để code gọn hơn

// const rootReducer = (state = {}, action) => {
//   //Nhớ khởi tạo state
//   return {
//     filters: filtersReducer(state.filters, action),
//     todoList: todosListReducer(state.todoList, action),
//   };
// };

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todosListReducer,
});

export default rootReducer;
