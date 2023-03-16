import React, { Component, useState,useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Auth } from "./pages";
import MenuShow from "./MenuContents/MenuShow";
import AdminPage from "./AdminContent/AdminPage";

const App = () => {
  // const [isLogin , setIsLogin] = useState(false);

  // useEffect(()=>{
     
  // },[]);

  // function loginCallBack(login){
  //   setIsLogin(login);
  // }

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

