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
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import Cam from "./Button/Cam";
import Order from "./Button/Order";
import Robot from "./Button/Robot";
import Table from "./Button/Table";
import { FaUserCheck } from "react-icons/fa";

const Menu = ({ setContent }) => {
  const handleClickButton = (e, number) => {
    setContent(number);
  };

  return (
    <>
      <Container>
        <Row>
          <Col id="intro">
            <div id="UserIcon">
              <FaUserCheck />
            </div>
            &nbsp;&nbsp;&nbsp;
            <div id="IntroText">USER</div>
          </Col>
        </Row>

        <Row>
          <Col id="button_div">
            <Button
              variant="outline-info"
              id="button"
              onClick={(e) => handleClickButton(e, 0)}
            >
              <FontAwesomeIcon icon={faRobot} className="ButtonIcon" />
              <div className="ButtonName">Table</div>
            </Button>
          </Col>

          <Col id="button_div">
            <Button
              variant="outline-info"
              id="button"
              onClick={(e) => handleClickButton(e, 1)}
            >
              <FontAwesomeIcon icon={faReceipt} className="ButtonIcon" />
              <div className="ButtonName"> Order List</div>
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
              <FontAwesomeIcon icon={faVideo} className="ButtonIcon" />
              <div className="ButtonName">Monitor</div>
            </Button>
          </Col>
          <Col id="button_div">
            <Button
              variant="outline-info"
              id="button"
              onClick={(e) => handleClickButton(e, 3)}
            >
              <FontAwesomeIcon icon={faCircleInfo} className="ButtonIcon" />
              <div className="ButtonName">Info</div>
            </Button>
          </Col>
        </Row>

        <Row>
          <Col id="cam">
            <Col id="cam_monitor">
              <Col id="cam_monitor_inner"></Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Menu;
