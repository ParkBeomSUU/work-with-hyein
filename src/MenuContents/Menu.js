import React, {useState} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MenuShow.css";

import Liquor from "./Button/liquor";
import Cocktail from "./Button/cocktail";
import Korean from './Button/Korean';
import Food from './Button/Food';

import Korea from './Image/Korea.png';
import cock from "./Image/Cocktail.png";
import Liq from "./Image/Liquor.png";
import foodd from './Image/Food.png';

const Menu = ({ setContent, volume }) => {

const handleClickButton = (e, number) =>{
  setContent(number)
};

  const selectComponent = { // 객체 생성 // 객체의 key를 버튼의 name값과 동일하게 해줘야한다.
    liquor: <liquor />,
    cocktail: <cocktail />,
    Korean: <Korean />,
    Food: <Food />,
  };
  
  
  return (
    <>
      <Container>
        <Row>
          <Col id="intro_2">{}번 테이블</Col>
        </Row>
      

        <Row>
          <Col id="button_div_2">
              <Button  variant="outline-info" onClick={(e) => handleClickButton(e, 0)} id="button_2">
              <img src={Liq}  style={{width : '75px'}}/><br/>
              <a style={{fontSize: '1.5rem'}}> &#8213; Liquor  &#8213; </a>

              </Button>
          </Col>
          <Col id="button_div_2">
            <Button variant="outline-info" onClick={(e) => handleClickButton(e, 1)} id="button_2">
              <img src={cock}  style={{width : '75px'}}/><br/>
              <a style={{fontSize: '1.5rem'}}>&#8213; Cocktail  &#8213; </a>

            </Button>
          </Col>
        </Row>
        <Row>
          <Col id="button_div_2">
            <Button  variant="outline-info" onClick={(e) => handleClickButton(e, 2)} id="button_2">
              <img src={Korea}  style={{width : '75px'}}/><br/>
              <a style={{fontSize: '1.4rem'}}> &#8213; Traditional  &#8213; </a>

            </Button> 
          </Col>
          <Col id="button_div_2">
            <Button variant="outline-info" onClick={(e) => handleClickButton(e, 3)} id="button_2">
            <img src={foodd}  style={{width : '75px'}}/><br/>
            <a style={{fontSize: '1.5rem'}}>&#8213; Food  &#8213; </a>
            </Button>
      

          </Col>
        </Row>
        
        <Row>
          <Col id="cam_2">
            <Col id="cam_monitor">
              {volume.founder > 0 && `파운더 : ${volume.founder}`} <br/>

              {volume.GlenDower > 0 && `글랜다워 : ${volume.GlenDower}`}
            </Col>
          </Col>
        </Row>
        </Container>
   
    </>
  );
};

export default Menu;
