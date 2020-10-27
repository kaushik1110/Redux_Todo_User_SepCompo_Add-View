const ADD_DATA = "ADD_DATA";
// debugger
export const addData = (message) => ({
  type: ADD_DATA,
  message: message,
  id: Math.random(),
});