import { Container, Row, Col, Button } from "react-bootstrap";
import  './Button.css';
import React,{useState} from "react";






const Food = ({ setVolume, volume }) =>{
    return(
<>
    <Container>
        <Row id="Menus1">
            
        <Row id ="Menus">
            
            <Col >
            <div className="box">           
            <img src=  {process.env.PUBLIC_URL +"/Food/Gambas.png" }  style={{width : '150px'}}/>
                <div className="introduce">
			        <h3>Gambas</h3>
			        <p> Price : 2.1 <br/> <br/>
				    Taste : 갈릭베이스에 새우가 들어간 감바스<br/> <br/>
                    원산지 : 국산
                    <br/>
				
			
			        </p>
		        </div>
            <hr size="4"  />
            </div>

            감바스
            <div id="PlusMa">
            <Button  id="Plus" onClick={() => setVolume({
                ...volume, Gambas: volume.Gambas === 10 ? 10 : volume.Gambas + 1
            })}>+ </Button>
            <div id="Count"> {volume.Gambas} </div>
            <Button  id="Minus"  onClick={() => setVolume({
                ...volume, Gambas: volume.Gambas === 0 ? 0 : volume.Gambas - 1
            })}>- </Button>
            </div>
            </Col>   
        </Row>


 


 


    </Row>
 
</Container>


</>


    )
};


export default Food;