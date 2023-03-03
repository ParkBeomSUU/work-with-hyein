import React from "react";
import { Container, Row, Col, Button, Card, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";
import TablePic from "../Img/Table.png";
import StartModal from "./StartModal";

const Table = () => {
  return (
    <>
      <Container>
        {" "}
        <img
          src={TablePic}
          style={{ width: "50rem", height: "30rem", marginTop: "40px" }}
        />
        <br />
        <br />
        <br />
        <StartModal />
      </Container>
    </>
  );
};

export default Table;
