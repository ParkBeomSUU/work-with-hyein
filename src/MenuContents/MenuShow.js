import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import "./MenuShow.css";
import List from "./List";
import { useDispatch } from "react-redux";
import axios from "axios";
import { prices } from "./Button/prices";

const MenuShow = () => {




    // console.log(content);
    const url="https //13.124.151.184/test"
    const config = {"Content-Type": 'application/json'};





  const [bill, setBill] = useState({})
  const [content, setContent] = useState(0); //state 선언
  const [menuText, setMenuText] = useState("")
  const [ volume, setVolume ] = useState({
    //양주
    founder: 0,
    GlenDower: 0,
    Jagermeilter:0,
    JimBeam:0,
    Tina:0,
    TheClass33:0,
    Macallan12:0,
    TellinfSingleMalt:0,

    //음식
    cheeseBall:0,
    FriedOjiCheese:0,
    Gambas:0,
    Gorgonzola:0,
    Mellon:0,
    Pepperoni:0,
    Pineapple:0,

    //전통주
    Dowon:0,
    Hwang:0,
    Lee:0,
    mak:0,
    Monkey:0,
    Naru:0,
    nimome:0,
    OdiRang:0,
    Omiza:0,
    OneSoju:0,
    Peach:0,
    perpleJin:0,
    Rye:0,
    SuloCity:0,


    //칵테일
    bloodyMary:0,
    blueHawaii:0,
    cosmopolitan:0,
    margarita:0,
    martini:0,
    mojito:0,
    oldFashioned:0,
    rustyNail:0,
    sangria:0,
    tequilaSunrise:0,
  })

  // useEffect(() => {
  //   console.log(menuText)
  //   // console.log(volume)

  //   // 각 메뉴의 선택 개수와 가격을 곱해 총액을 계산하는 로직 추가하고
  //   const forBill = {} //빈 부분 만들어서 추가 용이하게 , 볼륨에 가격 곱한거 넣을부분

  //   const volumeKey = Object.keys(volume) //볼륨이랑 가격의 키를 받아온다.
  //   const priceKey = Object.keys(prices)

  //   volumeKey.map((menu, index) => {
  //     let price = volume[menu] * prices[priceKey[index]]
  //     if(price !== 0){ //0 빼고
  //       forBill[menu] = volume[menu] * prices[priceKey[index]]
  //     }
  //   })

  //   setBill(forBill)

  // },[menuText])


  useEffect(() => {
    console.log("현재 주문 내역은:", bill)
  }, [bill])



  
  return (
    <>
      <Container id="out_2">
        <Row id="row_2">
          <Col id="first_2" sm={{ span: 4 }} xs={{ span: 4 }}>
            <Menu setContent={setContent} volume={volume} menuText={menuText} setMenuText={setMenuText}  bill={bill} setBill={setBill} />
          </Col>
          
          <Col id="second_2" sm={{ span: 8 }} xs={{ span: 8 }}>
           
            <List content={content} volume={volume} setVolume={setVolume}
            />
          
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MenuShow;
