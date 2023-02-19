const initState = [
  {
    id: 1,
    name: "ABC",
    completed: false,
    priority: "Medium",
  },
  {
    id: 2,
    name: "DEF",
    completed: true,
    priority: "Medium",
  },
  {
    id: 3,
    name: "XAU",
    completed: false,
    priority: "Medium",
  },
];

//Nên chia reducer thành các phần nhỏ để code dễ nhìn

const todosListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleTodoStatus": //update status
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return state;
  }
};

export default todosListReducer;
