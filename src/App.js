import React, { Component, useState,useEffect } from "react";
import { Route } from "react-router-dom";
import { Home, Auth } from "./pages";
import MenuShow from "./MenuContents/MenuShow";
import AdminPage from "./AdminContent/AdminPage";


const App = ({bill}) => {

  const [currentOrderList, setOrderList] = useState({});
  useEffect (() =>{

    setOrderList();
  },[])
  return (
    <>
      <Route path="/Auth" component={Auth} />
      <Route path="/Menu" component={MenuShow} currentOrderList={currentOrderList} setOrderList={setOrderList} bill={bill}/>
      <Route exact path="/" component={Home} />
      <Route path="/Admin" component={AdminPage}  bill={bill} currentOrderList={currentOrderList} />
    </>
  );
};

export default App;
