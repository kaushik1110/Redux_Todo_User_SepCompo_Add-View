const ADD_TODO = "ADD_TODO";
export const addTodo = (data) => ({
  type: ADD_TODO,
  data
  // id: Math.random(),
});
// debugger
const DELETE_TODO = "DELETE_TODO";
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});
