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


        <Row id ="Menus">
            
            <Col >
            <div className="box">           
            <img src=  {process.env.PUBLIC_URL +"/Food/FriedOjiCheese.png" }  style={{width : '150px'}}/>
                <div className="introduce">
			        <h3>FriedOjiCheese</h3>
			        <p> Price : 2.1 <br/> <br/>
				    Taste : 갈릭베이스에 새우가 들어간 감바스<br/> <br/>
                    원산지 : 국산
                    <br/>
				
			
			        </p>
		        </div>
            <hr size="4"  />
            </div>
            FriedOjiCheese
            <div id="PlusMa">
            <Button  id="Plus" onClick={() => setVolume({
                ...volume, FriedOjiCheese: volume.FriedOjiCheese === 10 ? 10 : volume.FriedOjiCheese + 1
            })}>+ </Button>
            <div id="Count"> {volume.FriedOjiCheese} </div>
            <Button  id="Minus"  onClick={() => setVolume({
                ...volume, FriedOjiCheese: volume.FriedOjiCheese === 0 ? 0 : volume.FriedOjiCheese - 1
            })}>- </Button>
            </div>
            </Col>   
        </Row>
 
            
 
        <Row id ="Menus">
            
            <Col >
            <div className="box">           
            <img src=  {process.env.PUBLIC_URL +"/Food/cheeseBall.png" }  style={{width : '150px'}}/>
                <div className="introduce">
			        <h3>cheeseBall</h3>
			        <p> Price : 2.1 <br/> <br/>
				    Taste : 갈릭베이스에 새우가 들어간 감바스<br/> <br/>
                    원산지 : 국산
                    <br/>
				
			
			        </p>
		        </div>
            <hr size="4"  />
            </div>
            cheeseBall
            <div id="PlusMa">
            <Button  id="Plus" onClick={() => setVolume({
                ...volume, cheeseBall: volume.cheeseBall === 10 ? 10 : volume.cheeseBall + 1
            })}>+ </Button>
            <div id="Count"> {volume.cheeseBall} </div>
            <Button  id="Minus"  onClick={() => setVolume({
                ...volume, cheeseBall: volume.cheeseBall === 0 ? 0 : volume.cheeseBall - 1
            })}>- </Button>
            </div>
            </Col>   
        </Row>


        <Row id ="Menus">
            
            <Col >
            <div className="box">           
            <img src=  {process.env.PUBLIC_URL +"/Food/Gorgonzola.png" }  style={{width : '150px'}}/>
                <div className="introduce">
			        <h3>Gorgonzola</h3>
			        <p> Price : 2.1 <br/> <br/>
				    Taste : 갈릭베이스에 새우가 들어간 감바스<br/> <br/>
                    원산지 : 국산
                    <br/>
				
			
			        </p>
		        </div>
            <hr size="4"  />
            </div>
            Gorgonzola
            <div id="PlusMa">
            <Button  id="Plus" onClick={() => setVolume({
                ...volume, Gorgonzola: volume.Gorgonzola === 10 ? 10 : volume.Gorgonzola + 1
            })}>+ </Button>
            <div id="Count"> {volume.cheeseBall} </div>
            <Button  id="Minus"  onClick={() => setVolume({
                ...volume, Gorgonzola: volume.Gorgonzola === 0 ? 0 : volume.Gorgonzola - 1
            })}>- </Button>
            </div>
            </Col>   
        </Row>

 
          
        <Row id ="Menus">
            
            <Col >
            <div className="box">           
            <img src=  {process.env.PUBLIC_URL +"/Food/Mellon.png" }  style={{width : '150px'}}/>
                <div className="introduce">
			        <h3>Mellon</h3>
			        <p> Price : 2.1 <br/> <br/>
				    Taste : 갈릭베이스에 새우가 들어간 감바스<br/> <br/>
                    원산지 : 국산
                    <br/>
				
			
			        </p>
		        </div>
            <hr size="4"  />
            </div>
            Mellon
            <div id="PlusMa">
            <Button  id="Plus" onClick={() => setVolume({
                ...volume, Mellon: volume.Mellon === 10 ? 10 : volume.Mellon + 1
            })}>+ </Button>
            <div id="Count"> {volume.Mellon} </div>
            <Button  id="Minus"  onClick={() => setVolume({
                ...volume, Mellon: volume.Mellon === 0 ? 0 : volume.Mellon - 1
            })}>- </Button>
            </div>
            </Col>   
        </Row>

 


        <Row id ="Menus">
            
            <Col >
            <div className="box">           
            <img src=  {process.env.PUBLIC_URL +"/Food/Pineapple.png" }  style={{width : '150px'}}/>
                <div className="introduce">
			        <h3>Pineapple</h3>
			        <p> Price : 2.1 <br/> <br/>
				    Taste : 갈릭베이스에 새우가 들어간 감바스<br/> <br/>
                    원산지 : 국산
                    <br/>
				
			
			        </p>
		        </div>
            <hr size="4"  />
            </div>
            Pineapple
            <div id="PlusMa">
            <Button  id="Plus" onClick={() => setVolume({
                ...volume, Pineapple: volume.Pineapple === 10 ? 10 : volume.Pineapple + 1
            })}>+ </Button>
            <div id="Count"> {volume.Pineapple} </div>
            <Button  id="Minus"  onClick={() => setVolume({
                ...volume, Pineapple: volume.Pineapple === 0 ? 0 : volume.Pineapple - 1
            })}>- </Button>
            </div>
            </Col>   
        </Row>

 
    </Row>
    <Row id ="Menus">
            
            <Col >
            <div className="box">           
            <img src=  {process.env.PUBLIC_URL +"/Food/Pepperoni .png" }  style={{width : '150px'}}/>
                <div className="introduce">
			        <h3>Pepperoni </h3>
			        <p> Price : 2.1 <br/> <br/>
				    Taste : 갈릭베이스에 새우가 들어간 감바스<br/> <br/>
                    원산지 : 국산
                    <br/>
				
			
			        </p>
		        </div>
            <hr size="4"  />
            </div>
            Pepperoni 
            <div id="PlusMa">
            <Button  id="Plus" onClick={() => setVolume({
                ...volume, Pepperoni : volume.Pepperoni  === 10 ? 10 : volume.Pepperoni  + 1
            })}>+ </Button>
            <div id="Count"> {volume.Pepperoni } </div>
            <Button  id="Minus"  onClick={() => setVolume({
                ...volume, Pepperoni : volume.Pepperoni  === 0 ? 0 : volume.Pepperoni  - 1
            })}>- </Button>
            </div>
            </Col>   
        </Row>
 
</Container>


</>


    )
};


export default Food;