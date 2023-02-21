import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Table = () => {
  return (
    <>
      <Container>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col>
              <Card id="table" border="info" style={{ width: "18rem" }}>
                <Card.Header>Table </Card.Header>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <br />
        <br />
        <br />
        <Button variant="outline-info">출발</Button>{" "}
      </Container>
    </>
  );
};

export default Table;
