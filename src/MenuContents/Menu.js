import React, {useState,useEffect} from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MenuShow.css";


import Receipt from './Button/Receipt';
import ReciptModal from "./Button/ReciptModal";

import Liquor from "./Button/liquor";
import Cocktail from "./Button/Cocktail";
import Korean from "./Button/Korean";
import Food from "./Button/Food";

import Korea from "./Image/Korea.png";
import cock from "./Image/Cocktail.png";
import Liq from "./Image/Liquor.png";
import foodd from "./Image/Food.png";
import axios from "axios";

import OrderButton from "./Button/OrderButton";
import qs from "qs";
import { post } from 'axios';
import { text } from "@fortawesome/fontawesome-svg-core";


const Menu = ({ setContent, volume, setMenuText,menuText }) => {

  //카카오 해보자
  const [, , removeCookie] = useCookies('nickName')
  const [kperson, setKPerson] = useState('')
  const [nickName, setNickName] = useState('')
  const [email, setEmail] = useState('')
  const [profile, setProfile] = useState('')
  const KAKAO_LOGOUT_URL ='http://localhost:3000'

  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  function deleteCookie() {
    removeCookie('nickName');   
    axios.get('/deleteCookie')
}


  useEffect(() => {
      if(code !== null) {
          axios.get('/~~~',
                  {params: {code: code}}
              ).then(response => { 
                  setKPerson(response.data)

              }).then(() => {
                  window.history.pushState(kperson, null, "http://localhost:3000/Menu/Contents")
              })
          }

      axios.get("/~~~~").then(response => {
              var arr = response.data.split(" ")
              const nickName = arr[0];
              const email = arr[1];
              const profile = arr[2];

              setNickName(nickName)
              setEmail(email)
              setProfile(profile)
      })

      if(nickName !== "") {
          axios.get("/addkperson", null, {
              params: {
                  nickname: nickName,
                  email: email,
                  profile: profile,
              }
          })
      }
  }, [code, email, kperson, nickName, profile])




  //버튼 보내는거
  const handleClickButton = (e, number) =>{
    setContent(number)
  };
//버튼 보내는거
const url="https //13.124.151.184/test"
const config = {"Content-Type": 'application/json'};

useEffect(() => {
    let content ="";
    for(let key in volume) {
      if(volume[key] > 0){
  
        content+=key+" "+volume[key]+","
      }
   }
   setMenuText(content)  
  }, [ volume ])

  return (
    <>
      <Container>
        <Row>
          <Col id="intro_2">
          <>
                    <img className="w-10 h-8" src={profile} alt="profile" id="profile"/>
                    <p className="w-16 h-8">{nickName}</p>
                    <a className="w-16 h-8" href={KAKAO_LOGOUT_URL} id="logout" onClick={deleteCookie}>
                        <button className="w-16 h-8 text-white bg-blue-600 border-none rounded-md hover:bg-blue-800">
                            Logout
                        </button>

                  
                    </a>
                    <Receipt />
               
                </>
          </Col>
        </Row>

        <Row>
          <Col id="button_div_2">
            <Button
              variant="outline-info"
              onClick={(e) => handleClickButton(e, 0)}
              id="button_2"
            >
              <img src={Liq} style={{ width: "75px" }} />
              <br />
              <a style={{ fontSize: "1.5rem" }}> &#8213; Liquor &#8213; </a>
            </Button>
          </Col>
          <Col id="button_div_2">
            <Button
              variant="outline-info"
              onClick={(e) => handleClickButton(e, 1)}
              id="button_2"
            >
              <img src={cock} style={{ width: "75px" }} />
              <br />
              <a style={{ fontSize: "1.5rem" }}>&#8213; Cocktail &#8213; </a>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col id="button_div_2">
            <Button
              variant="outline-info"
              onClick={(e) => handleClickButton(e, 2)}
              id="button_2"
            >
              <img src={Korea} style={{ width: "75px" }} />
              <br />
              <a style={{ fontSize: "1.4rem" }}>
                {" "}
                &#8213; Traditional &#8213;{" "}
              </a>
            </Button>
          </Col>
          <Col id="button_div_2">
            <Button
              variant="outline-info"
              onClick={(e) => handleClickButton(e, 3)}
              id="button_2"
            >
              <img src={foodd} style={{ width: "75px" }} />
              <br />
              <a style={{ fontSize: "1.5rem" }}>&#8213; Food &#8213; </a>
            </Button>
          </Col>
        </Row>

        <Row>
          <Col id="cam_2"> 
            <Col id="cam_monitor">
              <form action="http://localhost:3000/admin" method="post"  id="formBox">

              {volume.founder > 0 && <p>{`파운더 : ${volume.founder}`}</p>} 

              {volume.GlenDower > 0 && <p>{`글랜다워 : ${volume.GlenDower}`}</p>}

              {volume.Jagermeilter > 0 && <p>{`예거마이스터 : ${volume.Jagermeilter}`}</p>} 
              {volume.JimBeam > 0 &&<p> {`짐빔 : ${volume.JimBeam}`}</p>} 
              {volume.Tina > 0 && <p> {`티나 : ${volume.Tina}`}</p>}
              {volume.TheClass33 > 0 && <p>{`더클라스33 : ${volume.TheClass33}`}</p>}
              {volume.Macallan12 > 0 && <p>{`맥캘란12 : ${volume.Macallan12}`}</p>} 
              {volume.TellinfSingleMalt > 0 && <p>{`티링 : ${volume.TellinfSingleMalt}`}</p>} 


              {volume.Gambas > 0 && <p>{`감바스 : ${volume.Gambas}`}</p>} 
              {volume.FridOjiCheese > 0 && <p>{`오지치즈후라이 : ${volume.FridOjiCheese}`}</p>}
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

              {volume.bloodyMary > 0 && <p>{`블러드 메리: ${volume.bloodyMary}`}</p>}
              {volume.blueHawaii > 0 && <p>{`블루 하와이: ${volume.blueHawaii}`}</p>}
              {volume.cosmopolitan > 0 && <p>{`코즈모폴리탄: ${volume.cosmopolitan}`}</p>}
              {volume.margarita > 0 && <p>{`마가리타: ${volume.margarita}`}</p>}
              {volume.martini > 0 && <p>{`마티니: ${volume.martini}`}</p>}
              {volume.mojito > 0 && <p>{`모히또: ${volume.mojito}`}</p>}
              {volume.oldFashioned > 0 && <p>{`올드패션드: ${volume.oldFashioned}`}</p>}
              {volume.rustyNail > 0 && <p>{`러스티 네일: ${volume.rustyNail}`}</p>}
              {volume.sangria > 0 && <p>{`상그리아: ${volume.sangria}`}</p>}
              {volume.tequilaSunrise > 0 && <p>{`데킬라선라이즈: ${volume.tequilaSunrise}`}</p>}


       
          </form>

            </Col>
          </Col>
          <OrderButton  onClick={(e) =>{
              console.log(menuText)
              e.preventDefault();
              axios.post('https://13.124.151.184/test', {
                menuText: menuText           

              })
              .then((res) => {
                console.log("성공");

              })
              .catch((error) => {
                console.log("실패");
              })
               }}/>
        </Row>
  
        </Container>
   
    </>
  );
};

export default Menu;
