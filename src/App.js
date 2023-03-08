import React, { Component, useState } from "react";
import { Route } from "react-router-dom";
import { Home, Auth } from "./pages";
import MenuShow from "./MenuContents/MenuShow";

// 혜인 추가
import AdminPage from "./AdminContent/AdminPage";

const App = () => {
  // 범수 쪽에서 서버로 주문내역 보낼때마다 상태를 현재에 맞게 갱신
  // 이게 바뀌면 혜인 쪽에서 오더리스트로 표시하면 된다
  const [currentOrderList, setOrderList] = useState({});

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
