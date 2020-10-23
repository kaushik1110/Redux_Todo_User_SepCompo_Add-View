
const initialState = {
  data: [
    {
      name:"kaushik",
      age:"21",
      type:"manager"
    }
  ],
};

const UserTodo = (state = initialState, action) => {
  debugger
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        data: [
          ...state.data,
          {
            name: state.data[].name,
            age: state.data[].age,
            type: state.data[].type, 
            },
          ],
        };
     
      default:
        return state;
    }
  };
  export default UserTodo;
  
  