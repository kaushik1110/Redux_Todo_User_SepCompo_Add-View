import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import List from './components/List/List'
import MainRouter from './MainRouter';
function App() {
  return (
    <div className="App">
      {/* <AddTodo/> */}
      <MainRouter />
      {/* <List/>  */}
    </div>
  );
}

export default App;
