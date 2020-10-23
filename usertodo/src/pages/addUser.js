import React, { useState } from "react";
import { addData } from "../Action/Action";
import { connect } from "react-redux";
import Home from "./Home";
import "../App.css";

const AddUser = (props) => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [type, setType] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(addData(name, age, type));
    setName("");
    setAge("");
    setType("");
  };
  
       return (
         <>
      <Home />
      <div className="addtable container">
        <h3 className="textadd">Add User Details</h3>
        <form className="addform" >
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Age</label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                name="age"
                placeholder="Enter Age"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Type</label>
            <div className="col-sm-10">
              <select
                className="browser-default custom-select mb-4"
                name="type"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <option value="" disabled>
                  Choose option
                </option>
                <option value="Manager">
                  Manager
                </option>
                <option value="Employee">Employee</option>
              </select>
            </div>
          </div>

          <div className="bsubmit form-group row">
            <div className="bsubmit col-sm-10">
              <button type="submit" className="bsubmit btn btn-primary btn-md" onClick={(e) => handleSubmit}>
                ADD
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default connect()(AddUser);
