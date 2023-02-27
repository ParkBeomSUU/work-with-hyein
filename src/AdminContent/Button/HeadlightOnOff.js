import React from "react";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryThreeQuarters } from "@fortawesome/free-solid-svg-icons";
import { BsLightbulb } from "react-icons/bs";
import { BsLightbulbOff } from "react-icons/bs";

function HeadlightOnOff() {
  const On = "리액트";
  return <>{On === "리액트" ? <BsLightbulb /> : <BsLightbulbOff />}</>;
}

export default HeadlightOnOff;
