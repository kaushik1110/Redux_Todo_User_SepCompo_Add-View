import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../../actions";
import Home from "../../Pages/Home";
const List = (props) => {
  // const Data = JSON.parse(localStorage.getItem('Data'))  
  // debugger
  return (
    <>
      <Home />
      <div className="tableset container">
        <h3>User Information</h3>
        <table className="table table-bordered">
          <thead>
            <tr className="fntsize">
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Type</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {props.todos.map((todo, index) => (
            <>
              {todo.type === "manager" && props.myProps === "manager" && (
                <tbody key={index}>
                  <tr className="textstyle">
                    <th>{todo.name}</th>
                    <th>{todo.age}</th>
                    <th>{todo.type}</th>
                    <th>
                      <button
                        className="btn btn-secondary active btn-md"
                        onClick={() => props.dispatch(deleteTodo(todo.id))}
                        >
                        Delete
                      </button>
                    </th>
                  </tr>
                </tbody>
              )}
              {/* {Data && Data.type === "manager" &&todo.type === "manager"&& props.myProps === "manager" && (
                <tbody key={index}>
                  <tr className="textstyle">
                    <th>{Data.name}</th>
                    <th>{Data.age}</th>
                    <th>{Data.type}</th>
                    <th> 
                       <button
                        className="btn btn-secondary active btn-md"
                        onClick={() => props.dispatch(deleteTodo(todo.id))}
                        >
                        Delete
                      </button> 
                     </th>
                  </tr>
                </tbody>
              )} */}
              {todo.type === "employee" && props.myProps === "employee" && (
                <tbody key={index}>
                  <tr className="textstyle">
                    <th>{todo.name}</th>
                    <th>{todo.age}</th>
                    <th>{todo.type}</th>
                    <th>
                      <button
                        className="btn btn-secondary active btn-md"
                        onClick={() => props.dispatch(deleteTodo(todo.id))}
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                </tbody>
              )}
            </>
          ))}
          
        </table>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos.data,
});
export default connect(mapStateToProps)(List);
