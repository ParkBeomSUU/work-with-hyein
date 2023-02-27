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

function Buzzer() {
  const On = "리액트";
  return (
    <>
      {On === "리액트" ? (
        <FontAwesomeIcon icon={faVolumeHigh} />
      ) : (
        <FontAwesomeIcon icon={faVolumeXmark} />
      )}
    </>
  );
}

export default Buzzer;
