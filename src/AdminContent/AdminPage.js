import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import "./Admin.css";
import AdminList from "./AdminList";

const AdminPage = () => {
  const [content, setContent] = useState(0); //state 선언
  console.log(content);
  return (
    <>
      <Container id="out">
        <Row>
          <Col id="first" sm={{ span: 4 }} xs={{ span: 4 }}>
            <Menu setContent={setContent} />
          </Col>
          <Col id="second" sm={{ span: 8 }} xs={{ span: 8 }}>
            <AdminList content={content} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminPage;
