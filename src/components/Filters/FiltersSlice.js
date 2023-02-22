// const initState = {
//   search: "",
//   status: "All",
//   priority: [],
// };
// //Nên chia reducer thành các phần nhỏ để code dễ nhìn
// const filtersReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filters/searchFillterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filters/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "filters/priorityFilterChange":
//       return {
//         ...state,
//         priority: action.payload,
//       };
//     default:
//       return state;
//   }
// };
// export default filtersReducer;

import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      //mutation: redux toolkit cho phép viết code mutation thay đổi trực tiếp state do cấu hình thư viện IMMER
      state.search = action.payload;
    }, // => {type: 'filters/searchFilterChange'}
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    priorityFilterChange: (state, action) => {
      state.priority = action.payload;
    },
  },
});
