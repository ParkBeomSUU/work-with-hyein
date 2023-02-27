import { Container, Row, Col, Button } from "react-bootstrap";
import  './Button.css';
import React,{useState} from "react";






const Cocktail = ({ setVolume, volume }) =>{
    return(
<>
    <Container>
        <Row id="Menus1">
            
        <Row id ="Menus">
            
            <Col >
            <div className="box">           
            <img src=  {process.env.PUBLIC_URL +"/Food/ㄴㄴ.png" }  style={{width : '120px'}}/>
                <div className="introduce">
			        <h3>칵테일</h3>
			        <p> alcohol degree : 40도  <br/> <br/>
				    Taste : 달콤하지만 묵직한 과일향<br/> <br/>
				    Price : 6.8
                    <br/>
				
			
			        </p>
		        </div>
            <hr size="4"  />
            </div>

            칵테일
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



    </Row>
 
</Container>


</>


    )
};


export default Cocktail;