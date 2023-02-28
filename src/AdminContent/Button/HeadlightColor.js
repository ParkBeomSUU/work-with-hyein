import React from "react";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFillDrip } from "@fortawesome/free-solid-svg-icons";

function HeadlightColor() {
  return <FontAwesomeIcon icon={faFillDrip} className="BatteryIcon" />;
}

export default HeadlightColor;
