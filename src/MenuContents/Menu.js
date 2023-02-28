import React, {useState} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MenuShow.css";

import Liquor from "./Button/liquor";
import Cocktail from "./Button/Cocktail";
import Korean from './Button/Korean';
import Food from './Button/Food';

import Korea from './Image/Korea.png';
import cock from "./Image/Cocktail.png";
import Liq from "./Image/Liquor.png";
import foodd from './Image/Food.png';
import axios from "axios";
import OrderButton from "./Button/OrderButton";





const Menu = ({ setContent, volume }) => {

const handleClickButton = (e, number) =>{
  setContent(number)
};

  const selectComponent = { // 객체 생성 // 객체의 key를 버튼의 name값과 동일하게 해줘야한다.
    liquor: <liquor />,
    Cocktail: <Cocktail />,
    Korean: <Korean />,
    Food: <Food />,
  };


  // axios.post("url", {
  //   params:{
  //     volume
  //   }
  //   .then(function (response){

  //   }).catch(function (error){

  //   }).then(function(){

  //   })
  // })
  

  // const url ="http://localhost:3000/admin";
  // if(volume.length > 0){
  //   return(
  //     axios.post(url).then(function(response){
  //       setContent(response.data);
  //       console.log("성공")
  //     })
  //   )
  // }




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
              <form>
                
              {volume.founder > 0 && <p>{`파운더 : ${volume.founder}`}</p>} 
              {volume.GlenDower > 0 && <p>{`글랜다워 : ${volume.GlenDower}`}</p>}
              {volume.Jagermeilter > 0 && <p>{`예거마이스터 : ${volume.Jagermeilter}`}</p>} 
              {volume.JimBeam > 0 &&<p> {`짐빔 : ${volume.JimBeam}`}</p>} 
              {volume.Tina > 0 && <p> {`티나 : ${volume.Tina}`}</p>}
              {volume.TheClass33 > 0 && <p>{`더클라스33 : ${volume.TheClass33}`}</p>}
              {volume.Macallan12 > 0 && <p>{`맥캘란12 : ${volume.Macallan12}`}</p>} 
              {volume.TellinfSingleMalt > 0 && <p>{`티링 : ${volume.TellinfSingleMalt}`}</p>} 


              {volume.Gambas > 0 && <p>{`감바스 : ${volume.Gambas}`}</p>} 
              {volume.FriedOjiCheese > 0 && <p>{`오지치즈후라이 : ${volume.FriedOjiCheese}`}</p>}
              {volume.cheeseBall > 0 && <p>{`치즈볼 : ${volume.cheeseBall}`}</p>} 
              {volume.Gorgonzola > 0 && <p>{`고르곤졸라 : ${volume.Gorgonzola}`}</p>} 
              {volume.Mellon > 0 && <p>{`멜론 : ${volume.Mellon}`}</p>}
              {volume.Pepperoni > 0 && <p>{`페페로니 : ${volume.Pepperoni}`}</p>} 
              {volume.pineapple > 0 && <p>{`파인애플 : ${volume.pineapple}`}</p>} 




              {volume.Dowon > 0 && <p>{`도원결의 : ${volume.Dowon}`}</p>}
              {volume.Hwang > 0 && <p>{`황진이 : ${volume.Hwang}`}</p>}
              {volume.Lee > 0 && <p>{`이강주 : ${volume.Lee}`}</p>}
              {volume.mak > 0 && <p>{`떠먹는 막걸리 : ${volume.mak}`}</p>}
              {volume.Monkey > 0 && <p>{`원숭이 막걸리 : ${volume.Monkey}`}</p>}
              {volume.Naru > 0 && <p>{`나루 막걸리 : ${volume.Naru}`}</p>}
              {volume.nimome > 0 && <p>{`제주 니모메 : ${volume.nimome}`}</p>}
              {volume.Omiza > 0 && <p>{`장수 오미자 : ${volume.Omiza}`}</p>}
              {volume.OneSoju > 0 && <p>{`원소주 : ${volume.OneSoju}`}</p>}
              {volume.OdiRang > 0 && <p>{`오디랑 : ${volume.OdiRang}`}</p>}
              {volume.Peach > 0 && <p>{`복숭아와인 : ${volume.Peach}`}</p>}
              {volume.purpleJin > 0 && <p>{`퍼플 진: ${volume.purpleJin}`}</p>}
              {volume.Rye > 0 && <p>{`퍼플진 : ${volume.Rye}`}</p>}
              {volume.SuloCity > 0 && <p>{`술로시티: ${volume.SuloCity}`}</p>}








              <OrderButton />

              </form>




            </Col>
          </Col>

        </Row>

        </Container>
   
    </>
  );
};

export default Menu;
