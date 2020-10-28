import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import List from "./components/List/List";
import AddTodo from "./components/AddTodo/AddTodo";
import Home from "./Pages/Home";

const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddTodo} />
          <Route exact path="/list" component={()=><List myProps="manager"/>}  />
          <Route exact path="/employeelist" component={()=><List myProps="employee"/>}  />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
