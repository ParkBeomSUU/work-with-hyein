import { Container, Row, Col, Button } from "react-bootstrap";
import  './Button.css';
import React,{useState} from "react";

const Liquor = ({ setVolume, volume }) =>{
    return(
<>
    <Container>
        <Row id="Menus1">
            
        <Row id ="Menus">       
            <Col >           
            <img src=  {process.env.PUBLIC_URL +"/Liquor/Founder.png" }  style={{width : '120px'}}/>
            <hr size="4"  />
            파운더
            <div id="PlusMa">
            <Button  id="Plus" onClick={() => setVolume({
                ...volume, founder: volume.founder === 10 ? 10 : volume.founder + 1
            })}>+ </Button>
            <div id="Count"> {volume.founder} </div>
            <Button  id="Minus"  onClick={() => setVolume({
                ...volume, founder: volume.founder === 0 ? 0 : volume.founder - 1
            })}>- </Button>
            </div>
            </Col>   
        </Row>

    <Row id ="Menus">
    <Col >
    <img src={process.env.PUBLIC_URL +"/Liquor/GlenDower.png"}  style={{width : '120px'}}/>
    <hr size="4"  />
    글랜다워
    <div id="PlusMa">
            <Button  id="Plus" onClick={() => setVolume({
                ...volume, GlenDower: volume.GlenDower === 10 ? 10 : volume.GlenDower + 1
            })}>+ </Button>
            <div id="Count"> {volume.GlenDower} </div>
            <Button  id="Minus"  onClick={() => setVolume({
                ...volume, GlenDower: volume.GlenDower === 0 ? 0 : volume.GlenDower - 1
            })}>- </Button>
            </div>
    
    </Col>
    
    </Row>

    <Row id ="Menus">
    <Col >
    <img src={process.env.PUBLIC_URL +"/Liquor/Jagermeilter.png"}  style={{width : '120px'}}/>
    <hr size="4"  />


    예거 마이스터</Col>
    
    </Row>

    <Row id ="Menus">
    <Col >
    <img src={process.env.PUBLIC_URL +"/Liquor/JimBeam.png"}  style={{width : '120px'}}/>
    <hr size="4"  />


    짐빔</Col>
    
    </Row>
    <Row id ="Menus">
    <Col >
    <img src={process.env.PUBLIC_URL +"/Liquor/Tina.png"}  style={{width : '120px'}}/>
    <hr size="4"  />


    티나</Col>
    
    </Row>
    <Row id ="Menus">
    <Col >
    <img src={process.env.PUBLIC_URL +"/Liquor/TheClass33.png"}  style={{width : '120px'}}/>
    <hr size="4"  />


    더 클라스</Col>
    
    </Row>

    </Row>


        <Row>
    <Row id ="Menus">
    <Col >
    <img src={process.env.PUBLIC_URL +"/Liquor/Macallan12.png"}  style={{width : '120px'}}/>
    <hr size="4"  />


    맥캘란 12</Col>
    
    </Row>

    <Row id ="Menus">
    <Col >
    <img src={process.env.PUBLIC_URL +"/Liquor/TellinfSingleMalt.png"}  style={{width : '120px'}}/>
    <hr size="5"  />
     

    짐빔</Col>
    
    </Row>


    </Row>
 
</Container>


</>


    )
};


export default Liquor;