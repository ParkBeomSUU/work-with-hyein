import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";

const Robot = () => {
  return (
    <>
      <Container>
        <Row>
          <Col id="battery"></Col>
          <Col id="buzzer"></Col>
        </Row>

        <Row>
          <Col id="headlight_onoff"></Col>
          <Col id="headlight_color"></Col>
        </Row>

        <Row>
          <Col id="rpm_l"></Col>
          <Col id="rpm_r"></Col>
        </Row>
      </Container>
    </>
  );
};

export default Robot;
