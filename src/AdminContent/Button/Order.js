import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheckToSlot } from "@fortawesome/free-solid-svg-icons";
import { BsClipboardCheck } from "react-icons/bs";

const Order = () => {
  return (
    <>
      <Container>
        <Row>
          <Col id="order">
            <div id="TableName">
              <BsClipboardCheck />
              &nbsp; Table 1
              <FontAwesomeIcon icon={faXmark} className="Xmark" />
            </div>
            <hr />
            {/* <hr /> */}
            {/* <ul id="TableName">
              <li></li>
              <br />
              <li></li>
              <br />
              <li></li>
            </ul> */}
          </Col>
          <Col id="order">
            <div id="TableName">
              <BsClipboardCheck />
              &nbsp; Table 1
              <FontAwesomeIcon icon={faXmark} className="Xmark" />
            </div>
            <hr />
            {/* <ul id="TableName">
              <li></li>
              <br />
              <li></li>
              <br />
              <li></li>
            </ul> */}
          </Col>
        </Row>
        <Row>
          <Col id="order">
            <div id="TableName">
              <BsClipboardCheck />
              &nbsp; Table 1
              <FontAwesomeIcon icon={faXmark} className="Xmark" />
            </div>
            <hr />
            {/* <ul id="TableName">
              <li></li>
              <br />
              <li></li>
              <br />
              <li></li>
            </ul> */}
          </Col>
          <Col id="order">
            <div id="TableName">
              <BsClipboardCheck />
              &nbsp; Table 1
              <FontAwesomeIcon icon={faXmark} className="Xmark" />
            </div>
            <hr />
            {/* <ul id="TableName">
              <li></li>
              <br />
              <li></li>
              <br />
              <li></li>
            </ul> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Order;
