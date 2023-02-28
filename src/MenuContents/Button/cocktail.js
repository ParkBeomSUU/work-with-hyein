import { Container, Row, Col, Button } from "react-bootstrap";
import "./Button.css";
import React, { useState } from "react";

const Cocktail = ({ setVolume, volume }) => {
  return (
    <>
      <Container>
        <Row id="Menus1">
          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Cocktail/bloodyMary.png"}
                  style={{ width: "140px", height: "170px" }}
                />
                <div className="introduce">
                  <h3>블러디 메리</h3>
                  <p>
                    {" "}
                    alcohol degree : 15도 <br /> <br />
                    Taste : 보드카와 레몬주스, 토마토주스, <br />
                    우스터소스를 결합한 독특한 맛
                    <br /> <br />
                    Price : 6.8
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              블러디 메리
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      founder: volume.founder === 10 ? 10 : volume.founder + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.founder} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      founder: volume.founder === 0 ? 0 : volume.founder - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Cocktail/martini.png"}
                  style={{ width: "190px", height: "170px" }}
                />
                <div className="introduce">
                  <h3>마티니</h3>
                  <p>
                    {" "}
                    alcohol degree : 30도 <br /> <br />
                    Taste : 진과 올리브가 들어가며 <br />
                    은은하고 묵직한 맛
                    <br /> <br />
                    Price : 6.8
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              마티니
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      founder: volume.founder === 10 ? 10 : volume.founder + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.founder} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      founder: volume.founder === 0 ? 0 : volume.founder - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Cocktail/margarita.png"}
                  style={{ width: "200px", height: "170px" }}
                />
                <div className="introduce">
                  <h3>마가리타</h3>
                  <p>
                    {" "}
                    alcohol degree : 30도 <br /> <br />
                    Taste : 데킬라, 큐라소, 라임향의 조합으로
                    <br />
                    시원하고 상큼한 맛
                    <br /> <br />
                    Price : 6.8
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              마가리타
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      founder: volume.founder === 10 ? 10 : volume.founder + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.founder} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      founder: volume.founder === 0 ? 0 : volume.founder - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Cocktail/sangria.png"}
                  style={{ width: "170px", height: "170px" }}
                />
                <div className="introduce">
                  <h3>상그리아</h3>
                  <p>
                    {" "}
                    alcohol degree : 14도 <br /> <br />
                    Taste : 레드와인과 과일의 조화
                    <br /> <br />
                    Price : 6.8
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              상그리아
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      founder: volume.founder === 10 ? 10 : volume.founder + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.founder} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      founder: volume.founder === 0 ? 0 : volume.founder - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Cocktail/mojito.png"}
                  style={{ width: "170px", height: "170px" }}
                />
                <div className="introduce">
                  <h3>모히또</h3>
                  <p>
                    {" "}
                    alcohol degree : 18도 <br /> <br />
                    Taste : 럼 피즈에 민트를 첨가한 맛
                    <br /> <br />
                    Price : 6.8
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              모히또
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      founder: volume.founder === 10 ? 10 : volume.founder + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.founder} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      founder: volume.founder === 0 ? 0 : volume.founder - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Cocktail/tequilaSunrise.png"}
                  style={{ width: "150px", height: "170px" }}
                />
                <div className="introduce">
                  <h3>데킬라 선라이즈</h3>
                  <p>
                    {" "}
                    alcohol degree : 12도 <br /> <br />
                    Taste : 데킬라향과 오렌지향의 조화
                    <br /> <br />
                    Price : 6.8
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              데킬라 선라이즈
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      founder: volume.founder === 10 ? 10 : volume.founder + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.founder} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      founder: volume.founder === 0 ? 0 : volume.founder - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Cocktail/cosmopolitan.png"}
                  style={{ width: "150px", height: "170px" }}
                />
                <div className="introduce">
                  <h3>코스모폴리탄</h3>
                  <p>
                    {" "}
                    alcohol degree : 20도 <br /> <br />
                    Taste : 크렌베리향과 오렌지향의 조화
                    <br /> <br />
                    Price : 6.8
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              코스모폴리탄
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      founder: volume.founder === 10 ? 10 : volume.founder + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.founder} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      founder: volume.founder === 0 ? 0 : volume.founder - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Cocktail/rustyNail.png"}
                  style={{ width: "190px", height: "170px" }}
                />
                <div className="introduce">
                  <h3>러스티 네일</h3>
                  <p>
                    {" "}
                    alcohol degree : 40도 <br /> <br />
                    Taste : 위스키 베이스의 고풍스러운 맛
                    <br /> <br />
                    Price : 6.8
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              러스티 네일
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      founder: volume.founder === 10 ? 10 : volume.founder + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.founder} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      founder: volume.founder === 0 ? 0 : volume.founder - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Cocktail/blueHawaii.png"}
                  style={{ width: "180px", height: "170px" }}
                />
                <div className="introduce">
                  <h3>블루 하와이</h3>
                  <p>
                    {" "}
                    alcohol degree : 10도 <br /> <br />
                    Taste : 럼 베이스에 파인애플향과 라임향의 조화
                    <br /> <br />
                    Price : 6.8
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              블루 하와이
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      founder: volume.founder === 10 ? 10 : volume.founder + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.founder} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      founder: volume.founder === 0 ? 0 : volume.founder - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>
          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Cocktail/oldFashioned.png"}
                  style={{ width: "140px", height: "170px" }}
                />
                <div className="introduce">
                  <h3>올드 패션드</h3>
                  <p>
                    {" "}
                    alcohol degree : 35도 <br /> <br />
                    Taste : 알코올에 단맛과 쓴맛을 더한 맛
                    <br /> <br />
                    Price : 6.8
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              올드 패션드
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      founder: volume.founder === 10 ? 10 : volume.founder + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.founder} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      founder: volume.founder === 0 ? 0 : volume.founder - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Cocktail;
