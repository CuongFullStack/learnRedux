const initState = {
  search: "",
  status: "All",
  priority: [],
};

//Nên chia reducer thành các phần nhỏ để code dễ nhìn

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case "filters/searchFillterChange":
      return {
        ...state,
        search: action.payload,
      };
    case "filters/statusFilterChange":
      return {
        ...state,
        status: action.payload,
      };
    case "filters/priorityFilterChange":
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
