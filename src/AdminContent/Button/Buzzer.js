import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faVideo,
  faListUl,
  faCircleInfo,
  faVolumeXmark,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import Tada from "react-reveal/Tada";

function BuzzerOn({ isOn }) {
  return isOn == "ON" ? (
    <Tada duration={2000}>
      <FontAwesomeIcon icon={faVolumeHigh} />
    </Tada>
  ) : (
    <Tada duration={2000}>
      <FontAwesomeIcon icon={faVolumeXmark} />
    </Tada>
  );
}

export default BuzzerOn;
