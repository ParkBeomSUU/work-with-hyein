import React, { Component, useState } from "react";
import { Route } from "react-router-dom";
import { Home, Auth } from "./pages";
import MenuShow from "./MenuContents/MenuShow";
import AdminPage from "./AdminContent/AdminPage";



const App = () => {
  
  // const [currentOrderList, setOrderList] = useState({});

  return (
    <>
      <Route path="/Auth" component={Auth} />
      <Route path="/Menu" component={MenuShow} />
      <Route exact path="/" component={Home} />
      <Route path="/Admin" component={AdminPage} />
    </>
  );
};

export default App;
