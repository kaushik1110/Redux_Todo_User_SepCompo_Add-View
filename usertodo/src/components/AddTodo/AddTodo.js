import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions";
import Home from "../../Pages/Home";
import "../../App.css";
const AddTodo = (props) => {
  const [Data, setData] = useState({
    id: Math.floor(Math.random()*10000),
    name: "",
    age: "",
    type: "",
  });
  const onSubmit = (value) => {
    value.preventDefault();
  // const Data = {
  //           id: Math.floor(Math.random()*10000),
  //           name: value.name,
  //           age: value.age,
  //           type: value.type,
  //        };
        props.dispatch(addTodo(Data));
        setData({
          name: "",
          age: "",
          type: "",
        })
  }
  
  return (
    <>
      <Home />
      <div className="addtable container">
        <h3 className="textadd mt-3">Add User Details</h3>
      <form
        className="formset"
        onSubmit={onSubmit}
        // onSubmit={(event) => {
        //   debugger
        //   event.preventDefault();
        // //   const Data = {
        // //     id: Math.floor(Math.random()*10000),
        // //     name: event.name,
        // //     age: event.age,
        // //     type: event.type,
        // //  };
        //   props.dispatch(addTodo(Data));
        //   // localStorage.setItem('Data',JSON.stringify(Data));
        //   setData({
        //     name: "",
        //     age: "",
        //     type: "",
        //   })
        // }}
      >
         <div className="form-group row">
        <label className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          name="userInput"
          value={Data.name}
          onChange={(e) => {
            setData({...Data, name : e.target.value});
          }}
          />
          </div>
          </div>
        <br />
        <div className="form-group row">
        <label className="col-sm-2 col-form-label">Age</label>
        <div className="col-sm-10">
        <input
          type="text"
          name="userAge"
          className="form-control"
          value={Data.age}
          onChange={(e) => {
            setData({...Data, age : e.target.value});
          }}
        />
        </div>
        </div>
        <br />
        <div className="form-group row">
        <label className="col-sm-2 col-form-label">Type</label>
        <div className="col-sm-10">
        <select
        className="form-control"
          name="type"
          value={Data.type}
          onChange={(e) => {
            setData({...Data, type : e.target.value});
          }}
        >
          <option value="" disabled>
            Choose option
          </option>
          <option value="manager">Manager</option>
          <option value="employee">Employee</option>
        </select>
        <br />
        </div>
        </div>

        <button type="submit" className="btnset btn btn-secondary active">
          Submit
        </button>
      </form>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.todos.data,
  };
};
export default connect(mapStateToProps)(AddTodo);