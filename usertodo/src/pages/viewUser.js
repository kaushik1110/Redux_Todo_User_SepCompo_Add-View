import React from "react";
import { connect } from "react-redux";
import Home from "./Home";
const viewUser = (props) => {
  const { data } = props;
  debugger;
  return (
    <>
      <Home />
      <div className="infotable">
        <h3 className="infoname">User Information</h3>
        <ul>
          {console.log(props)}
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Type</th>
              </tr>
            </thead>
            {props.UserTodo.map((todo, index) => (
              <tbody>
                <tr scope="row" key={index}>
                  <th>{todo.name}</th>
                  <th>{todo.age}</th>
                  <th>{todo.type}</th>
                </tr>
              </tbody>
            ))}
          </table>
        </ul>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};
export default connect(mapStateToProps)(viewUser);
