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
import Reveal from "react-reveal/Reveal";
import values from "../fakeData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Robot = () => {
  return (
    <>
      <Container>
        <Row>
          {/* 배터리 */}
          <Col id="battery">
            <div className="FirstDiv" id="InfoBtn">
              <div id="BatteryIconDiv">
                <Reveal effect="fadeInUp">
                  <Battery />
                </Reveal>
              </div>
            </div>
            <div className="SecondDiv">
              <p className="FirstPtag">{values.Battery}</p>{" "}
              <p className="SecondPtag">Battery</p>
            </div>
          </Col>

          {/* 버저 */}
          <Col id="buzzer">
            <div className="FirstDiv" id="InfoBtn">
              <Buzzer isOn={values.Buzzer} />
            </div>
            <div className="SecondDiv">
              <p className="FirstPtag">{values.Buzzer}</p>{" "}
              <p className="SecondPtag">Buzzer</p>
            </div>
          </Col>
        </Row>

        <Row>
          {/* 헤드라이트 전원 */}
          <Col id="headlight_onoff">
            <div className="FirstDiv" id="InfoBtn">
              <HeadlightOnOff isOn={values.Headlight} />
            </div>
            <div className="SecondDiv">
              <p className="FirstPtag">{values.Headlight}</p>{" "}
              <p className="SecondPtag">Headlight</p>
            </div>
          </Col>
          {/* 헤드라이트 색상 */}
          <Col id="headlight_color">
            <div className="FirstDiv" id="InfoButtons">
              <HeadlightColor />
            </div>
            <div className="SecondDiv">
              <p
                className="FirstPtag"
                style={{
                  color: values["LED Color"],
                }}
              >
                <FontAwesomeIcon icon={faCircle} id="LedIcon" />
                {/* rgb값은 어떻게 받아올 건지 */}
              </p>{" "}
              <p className="SecondPtag">LED Color</p>
            </div>
          </Col>
        </Row>

        <Row>
          {/* 왼쪽 rpm */}
          <Col id="rpm_l">
            <div className="FirstDiv" id="InfoButtons">
              <RpmLeft />
            </div>
            <div className="SecondDiv">
              <p className="FirstPtag">{values["Left RPM"]}</p>{" "}
              <p className="SecondPtag">Left RPM</p>
            </div>
          </Col>
          {/* 오른쪽 rpm */}
          <Col id="rpm_r">
            <div className="FirstDiv" id="InfoButtons">
              <RpmRight />
            </div>
            <div className="SecondDiv">
              <p className="FirstPtag">{values["Right RPM"]}</p>{" "}
              <p className="SecondPtag">Right RPM</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Robot;
