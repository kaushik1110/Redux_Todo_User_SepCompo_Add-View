const initialState = {
  data: [
    {
      name: "kaushik",
      age: 21,
      type: "manager",
      id: "3",
    },
    {
      name: "vmn",
      age: 22,
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