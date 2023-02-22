import { Container, Row, Col, Button } from "react-bootstrap";
import  './Button.css';
import React,{useState} from "react";

const Liquor = () =>{
    const [glass, setGalss] = useState(1);

    const onClickMinusHandler = (e) =>{
        // e.proventDefault();
        setGalss(glass+1)

    }
    const onClickPlusHandeler = (e) =>{
        // e.proventDefault();
        setGalss(glass-1)
    }
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
            <Button  id="Plus" onClick={ onClickMinusHandler} >+ </Button>
            <div id="Count"> {glass} </div>
            <Button  id="Minus" onClick={onClickPlusHandeler}  >- </Button>
            </div>



            </Col>
           
    
        </Row>

    <Row id ="Menus">
    <Col >
    <img src={process.env.PUBLIC_URL +"/Liquor/GlenDower.png"}  style={{width : '120px'}}/>
    <hr size="4"  />


    글랜다워</Col>
    
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