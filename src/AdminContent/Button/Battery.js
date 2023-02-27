import React from "react";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryThreeQuarters } from "@fortawesome/free-solid-svg-icons";

function Battery() {
  return (
    <FontAwesomeIcon icon={faBatteryThreeQuarters} id="BatteryIcon" />
    // <ProgressBar animated now={90} striped variant="info" id="BatteryBar" />
  );
}

export default Battery;
