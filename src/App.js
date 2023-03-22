import React, { Component, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Auth } from "./pages";
import MenuShow from "./MenuContents/MenuShow";
import AdminPage from "./AdminContent/AdminPage";
import NotFound from "./AdminContent/NotFound";
import Login from "./containers/Auth/Login";

const App = (userID) => {
  return (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/auth/login" component={Login} />
      <Route exact path="/menu" component={MenuShow} />
      <Route exact path="/" component={Home} />
      {/* {userID ==="admin" &&  */}
      <Route exact path="/Admin" component={AdminPage} /> 
      <Route path="/*" component={NotFound} />
    </Switch>
  );
};
//      {/* {userID ==="admin" && ( */  }

export default App;
