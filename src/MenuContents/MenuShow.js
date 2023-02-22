import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import "./MenuShow.css";
import List from "./List";


const MenuShow = () => {

  const [content, setContent] = useState(0); //state 선언

  const [ volume, setVolume ] = useState({
    founder: 0,
    GlenDower: 0,
  })



  console.log(content);

  return (
    <>
      <Container id="out_2">
        <Row id="row_2">
          <Col id="first_2" sm={{ span: 4 }} xs={{ span: 4 }}>
            <Menu setContent={setContent} volume={volume} />
          </Col>
          
          <Col id="second_2" sm={{ span: 8 }} xs={{ span: 8 }}>
           
            <List content={content} volume={volume} setVolume={setVolume} />
          
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MenuShow;
