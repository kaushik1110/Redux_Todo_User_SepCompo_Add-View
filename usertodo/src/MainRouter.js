import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import addUser from "./pages/addUser";
import Home from "./pages/Home";
import viewUser from "./pages/viewUser";

const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/adduser" component={addUser} />
          <Route exact path="/viewuser" component={viewUser}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;