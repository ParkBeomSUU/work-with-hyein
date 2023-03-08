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
import AdminList from "./AdminList";
import InfoButton from "./Button/InfoButton";

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
            <div id="IntroText">
              <InfoButton />
            </div>
          </Col>
        </Row>

        <Row style={{ flexWrap: "noWrap" }}>
          <Col id="button_div">
            <Button
              variant="outline-info"
              id="buttonFirst"
              onClick={(e) => handleClickButton(e, 0)}
            >
              <FontAwesomeIcon icon={faRobot} className="ButtonIcon" />
              <div className="ButtonName">Table</div>
            </Button>
          </Col>

          <Col id="button_div">
            <Button
              variant="outline-info"
              id="buttonFirst"
              onClick={(e) => handleClickButton(e, 1)}
            >
              <FontAwesomeIcon icon={faReceipt} className="ButtonIcon" />
              <div className="ButtonName"> Order List</div>
            </Button>
          </Col>
        </Row>

        <Row style={{ flexWrap: "noWrap" }}>
          <Col id="button_div">
            <Button
              variant="outline-info"
              id="buttonFirst"
              onClick={(e) => handleClickButton(e, 2)}
            >
              <FontAwesomeIcon icon={faVideo} className="ButtonIcon" />
              <div className="ButtonName">Monitor</div>
            </Button>
          </Col>
          <Col id="button_div">
            <Button
              variant="outline-info"
              id="buttonFirst"
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
              <Col id="cam_monitor_inner">
                {" "}
                <iframe
                  id="VideoFirst"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/DAEK5GrLb_Y"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Menu;
