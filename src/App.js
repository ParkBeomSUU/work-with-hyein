import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home, Auth } from "./pages";
import MenuShow from "./MenuContents/MenuShow";

// 혜인 추가
import AdminPage from "./AdminContent/AdminPage";

class App extends Component {
  render() {
    return (
      <>
        <Route path="/Auth" component={Auth} />
        <Route path="/Menu" component={MenuShow} />
        <Route exact path="/" component={Home} />
        <Route path="/Admin" component={AdminPage} />
      </>
    );
  }
}

export default App;
