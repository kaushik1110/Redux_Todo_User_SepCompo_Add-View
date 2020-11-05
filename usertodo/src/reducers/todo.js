const initialState = {
  data: [
    {
      name: "kaushik",
      age: 1234,
      type: "manager",
      id: "3",
    },
    {
      name: "vmn",
      age: 1233,
      type: "employee",
      id: "4",
    },
  ],
};

const todos = (state = initialState, action) => {
  
  switch (action.type) {
    case "ADD_TODO":
      return {
        data: [action.data, ...state.data],
        // localStorage.setItem('data',JSON.stringify(data)),
      };
    case "DELETE_TODO":
      const todos = state.data.filter((todo) => todo.id !== action.id);
      return {
        ...state,
        data: todos,
      };
    default:
      return state;
  }
};
export default todos;
