import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";

const Cam = () => {
  return (
    <>
      <Container>
        <Row>
          <div className="bg-light border" id="monitor">
            카메라 화면 나오는 곳
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Cam;
