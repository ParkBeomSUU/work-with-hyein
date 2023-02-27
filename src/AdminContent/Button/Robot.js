import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";
import Battery from "./Battery";
import Buzzer from "./Buzzer";
import HeadlightOnOff from "./HeadlightOnOff";
import HeadlightColor from "./HeadlightColor";
import ProgressBar from "react-bootstrap/ProgressBar";
import RpmLeft from "./RpmLeft";
import RpmRight from "./RpmRight";

const Robot = () => {
  return (
    <>
      <Container>
        <Row>
          {/* 배터리 */}
          <Col id="battery">
            <div className="FirstDiv">
              <Battery />
            </div>
            <div className="SecondDiv">
              <p className="FirstPtag">83%</p>{" "}
              {/* 배터리값 받아올 곳, 마진 바텀 0으로 하기*/}
              <p>Battery</p>
            </div>
          </Col>

          {/* 버저 */}
          <Col id="buzzer">
            <div className="FirstDiv">
              <Buzzer />
            </div>
            <div className="SecondDiv">
              <p className="FirstPtag">ON</p>{" "}
              {/* 버저 온오프값 받아올 곳, 마진 바텀 0으로 하기*/}
              <p className="SecondPtag">Buzzer</p>
            </div>
          </Col>
        </Row>

        <Row>
          {/* 헤드라이트 전원 */}
          <Col id="headlight_onoff">
            <div className="FirstDiv">
              <HeadlightOnOff />
            </div>
            <div className="SecondDiv">
              <p className="FirstPtag">ON</p>{" "}
              {/* 헤드라이트 온오프값 받아올 곳, 마진 바텀 0으로 하기*/}
              <p className="SecondPtag">Headlight</p>
            </div>
          </Col>
          {/* 헤드라이트 색상 */}
          <Col id="headlight_color">
            <div className="FirstDiv">
              <HeadlightColor />
            </div>
            <div className="SecondDiv">
              <p className="FirstPtag">RGB </p>{" "}
              {/* 헤드라이트 색상값 받아올 곳, 마진 바텀 0으로 하기*/}
              <p className="SecondPtag">LED Color</p>
            </div>
          </Col>
        </Row>

        <Row>
          {/* 왼쪽 rpm */}
          <Col id="rpm_l">
            <div className="FirstDiv">
              <RpmLeft />
            </div>
            <div className="SecondDiv">
              <p className="FirstPtag">155</p>{" "}
              {/* 헤드라이트 색상값 받아올 곳, 마진 바텀 0으로 하기*/}
              <p className="SecondPtag">Left RPM</p>
            </div>
          </Col>
          {/* 오른쪽 rpm */}
          <Col id="rpm_r">
            <div className="FirstDiv">
              <RpmRight />
            </div>
            <div className="SecondDiv">
              <p className="FirstPtag">200</p>{" "}
              {/* 헤드라이트 색상값 받아올 곳, 마진 바텀 0으로 하기*/}
              <p className="SecondPtag">Right RPM</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Robot;
