import React from "react";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faX } from "@fortawesome/free-solid-svg-icons";
import { BsLightbulbOffFill } from "react-icons/bs";
// import { BsLightbulbOff } from "react-icons/bs";

function HeadlightOnOff({ isOn }) {
  return isOn == "ON" ? (
    <FontAwesomeIcon icon={faLightbulb} id="LightOnIcon" />
  ) : (
    <BsLightbulbOffFill />
  );
}

export default HeadlightOnOff;
