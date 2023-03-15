import React, { Component, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Auth } from "./pages";
import MenuShow from "./MenuContents/MenuShow";
import AdminPage from "./AdminContent/AdminPage";
import NotFound from "./AdminContent/NotFound";

const App = () => {
  // const [currentOrderList, setOrderList] = useState({});

  return (
    <Switch>
      <Route exact path="/Auth" component={Auth} />
      <Route exact path="/Menu" component={MenuShow} />
      <Route exact path="/" component={Home} />
      <Route exact path="/Admin" component={AdminPage} />
      <Route path="/*" component={NotFound} />
    </Switch>
  );
};

export default App;
