// import { ADD_DATA } from "../Action/Action";
const initialState = {
  data: [
    {
      message: "vmn",
      id: "",
    },
  ],
};
debugger
const UserTodo = (state = initialState, action) => {
  console.log(action,"all the actions")
  // switch (action.type) {
  //   case "ADD_DATA":
  //     debugger
  //     return {
  //       ...state,
  //       data: [
  //         ...state.data,
  //         {
  //           message: action.message,
  //           id: action.id,
  //           // name: state.data[0].name,
  //           // age: state.data[].age,
  //           // type: state.data[].type, 
  //           },
  //         ],
  //         data: [action.post, ...state.posts],
  //       };
     
      // default:
        return state;
    // }
  };
  export default UserTodo;
  

  


  