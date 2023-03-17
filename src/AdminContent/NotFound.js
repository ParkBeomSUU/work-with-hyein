import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import "./Recipt.css";

const NotFound = () => {
  return (
    <div id="ErrorDiv">
      <div>
        <h1 id="ErrorPage">404, page not found</h1>
        <Link id="LoginAgain" to="/">
          다시 로그인
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
