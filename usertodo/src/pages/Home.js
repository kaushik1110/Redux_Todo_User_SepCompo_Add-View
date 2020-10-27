import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

const Home = () => {
   
  return (
    <div>
      <div className="container ">
        <h2 className="nameset">USER DETALS</h2>
        <div className="dropbox d-flex selectdata">
        <div className="dropdown d-flex mr-1">
            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
               ADD USER
            </button>
            <div className="dropdown-menu ">
                <a className="dropdown-item" href="# "> <Link to="/adduser" >Add Manager</Link></a>
                <a className="dropdown-item" href="# "><Link to="/adduser" >Add Employee</Link></a>
            </div>
        </div>
        <div className="btn-group d-flex">
            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                VIEW USER
            </button>
            <div className="dropdown-menu ">
                <a className="dropdown-item" href="# "> <Link to="/viewuser">View Manager</Link></a>
                <a className="dropdown-item" href="# "><Link to="/viewuser">View Employee</Link></a>
            </div>
        </div>
        </div>
    </div>
</div>
    
  );
}

export default Home
