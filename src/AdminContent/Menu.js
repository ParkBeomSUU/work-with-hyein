import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faVideo,
  faListUl,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import Cam from "./Button/Cam";
import Order from "./Button/Order";
import Robot from "./Button/Robot";
import Table from "./Button/Table";

const Menu = ({ setContent }) => {
  const handleClickButton = (e, number) => {
    setContent(number);
  };

  return (
    <>
      <Container>
        <Row>
          <Col id="intro">노혜인 님이 로그인 하셨습니다.</Col>
        </Row>

        <Row>
          <Col id="button_div">
            <Button
              variant="outline-info"
              id="button"
              onClick={(e) => handleClickButton(e, 0)}
            >
              <FontAwesomeIcon icon={faRobot} />
            </Button>
          </Col>

          <Col id="button_div">
            <Button
              variant="outline-info"
              id="button"
              onClick={(e) => handleClickButton(e, 1)}
            >
              <FontAwesomeIcon icon={faListUl} />
            </Button>
          </Col>
        </Row>

        <Row>
          <Col id="button_div">
            <Button
              variant="outline-info"
              id="button"
              onClick={(e) => handleClickButton(e, 2)}
            >
              <FontAwesomeIcon icon={faVideo} />
            </Button>
          </Col>
          <Col id="button_div">
            <Button
              variant="outline-info"
              id="button"
              onClick={(e) => handleClickButton(e, 3)}
            >
              <FontAwesomeIcon icon={faCircleInfo} />
            </Button>
          </Col>
        </Row>

        <Row>
          <Col id="cam">
            <Col id="cam_monitor"></Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Menu;
