import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import "./Admin.css";
import AdminList from "./AdminList";

const NotFound = () => {
  return (
    <Container className={"text-center"} fluid>
      <h1 style={{ color: "white" }}>404 not found</h1>
    </Container>
  );
};

export default NotFound;
