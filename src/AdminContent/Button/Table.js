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
        <Row id="MonitorRow">
          <Col id="TableMap"></Col>
        </Row>
      </Container>

      <div className="ModalDiv">
        <StartModal />
      </div>
    </>
  );
};

export default Table;
