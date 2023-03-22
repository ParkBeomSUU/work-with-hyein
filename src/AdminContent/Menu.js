import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faVideo,
  faCircleInfo,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import { RiAdminFill } from "react-icons/ri";
import InfoButton from "./Button/InfoButton";
// import AdminList from "./AdminList";

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
              <RiAdminFill />
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
              variant="outline-dark"
              id="buttonFirst"
              onClick={(e) => handleClickButton(e, 0)}
            >
              <FontAwesomeIcon icon={faRobot} className="ButtonIcon" />
              <div className="ButtonName">Recipe</div>
            </Button>
          </Col>

          <Col id="button_div">
            <Button
              variant="outline-dark"
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
              variant="outline-dark"
              id="buttonFirst"
              onClick={(e) => handleClickButton(e, 2)}
            >
              <FontAwesomeIcon icon={faVideo} className="ButtonIcon" />
              <div className="ButtonName">Monitor</div>
            </Button>
          </Col>
          <Col id="button_div">
            <Button
              variant="outline-dark"
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
                <iframe
                  id="MusicApi"
                  width="100%"
                  height="100%"
                  // scrolling="no"
                  // frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/gilbertcriville/sets/playlist-1&amp;color=999999&show_artwork=false
                  { ADD YOUR PARAMETERS HERE }"
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
