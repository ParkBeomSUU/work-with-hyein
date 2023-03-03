import { Container, Row, Col, Button } from "react-bootstrap";
import  './Button.css';
import React,{useState} from "react";






const Korean = ({ setVolume, volume }) =>{
    return(
<>
    <Container>
        <Row id="Menus1">
            
        <Row id ="Menus">
            
            <Col >
            <div className="box">           
            <img src=  {process.env.PUBLIC_URL +"/Korea/Dowon.png" }  style={{width : '150px'}}/>
                <div className="introduce">
			        <h3>도원결의</h3>
			        <p> Price : 2.1 <br/> <br/>
				    Taste : 갈릭베이스에 새우가 들어간 감바스<br/> <br/>
                    원산지 : 국산
                    <br/>
				
			
			        </p>
		        </div>
            <hr size="4"  />
            </div>
            도원결의
            <div id="PlusMa">
            <Button  id="Plus" onClick={() => setVolume({
                ...volume, Dowon: volume.Dowon === 10 ? 10 : volume.Dowon + 1
            })}>+ </Button>
            <div id="Count"> {volume.Gambas} </div>
            <Button  id="Minus"  onClick={() => setVolume({
                ...volume, Dowon: volume.Dowon === 0 ? 0 : volume.Dowon - 1
            })}>- </Button>
            </div>
            </Col>   
        </Row>


        <Row id ="Menus">
            
            <Col >
            <div className="box">           
            <img src=  {process.env.PUBLIC_URL +"/Korea/Hwang.png" }  style={{width : '150px'}}/>
                <div className="introduce">
			        <h3>황진이</h3>
			        <p> Price : 2.1 <br/> <br/>
				    Taste : 갈릭베이스에 새우가 들어간 감바스<br/> <br/>
                    원산지 : 국산
                    <br/>
				
			
			        </p>
		        </div>
            <hr size="4"  />
            </div>
            황진이
            <div id="PlusMa">
            <Button  id="Plus" onClick={() => setVolume({
                ...volume, Hwang: volume.Hwang === 10 ? 10 : volume.Hwang + 1
            })}>+ </Button>
            <div id="Count"> {volume.Hwang} </div>
            <Button  id="Minus"  onClick={() => setVolume({
                ...volume, Hwang: volume.Hwang === 0 ? 0 : volume.Hwang - 1
            })}>- </Button>
            </div>
            </Col>   
        </Row>
 
            
 
        <Row id ="Menus">
            
            <Col >
            <div className="box">           
            <img src=  {process.env.PUBLIC_URL +"/Korea/Lee.png" }  style={{width : '150px'}}/>
                <div className="introduce">
			        <h3>이강주</h3>
			        <p> Price : 2.1 <br/> <br/>
				    Taste : 갈릭베이스에 새우가 들어간 감바스<br/> <br/>
                    원산지 : 국산
                    <br/>
				
			
			        </p>
		        </div>
            <hr size="4"  />
            </div>
            전주 이강주
            <div id="PlusMa">
            <Button  id="Plus" onClick={() => setVolume({
                ...volume, Lee: volume.Lee === 10 ? 10 : volume.Lee + 1
            })}>+ </Button>
            <div id="Count"> {volume.Lee} </div>
            <Button  id="Minus"  onClick={() => setVolume({
                ...volume, Lee: volume.Lee === 0 ? 0 : volume.Lee - 1
            })}>- </Button>
            </div>
            </Col>   
        </Row>


        <Row id ="Menus">
            
            <Col >
            <div className="box">           
            <img src=  {process.env.PUBLIC_URL +"/Korea/mak.png" }  style={{width : '150px'}}/>
                <div className="introduce">
			        <h3>떠먹는막걸리</h3>
			        <p> Price : 2.1 <br/> <br/>
				    Taste : 갈릭베이스에 새우가 들어간 감바스<br/> <br/>
                    원산지 : 국산
                    <br/>
				
			
			        </p>
		        </div>
            <hr size="4"  />
            </div>
            떠먹는막걸리
            <div id="PlusMa">
            <Button  id="Plus" onClick={() => setVolume({
                ...volume, mak: volume.mak === 10 ? 10 : volume.mak + 1
            })}>+ </Button>
            <div id="Count"> {volume.mak} </div>
            <Button  id="Minus"  onClick={() => setVolume({
                ...volume, mak: volume.mak === 0 ? 0 : volume.mak - 1
            })}>- </Button>
            </div>
            </Col>   
        </Row>

 
          
        <Row id ="Menus">
            
            <Col >
            <div className="box">           
            <img src=  {process.env.PUBLIC_URL +"/Korea/Monkey.png" }  style={{width : '150px'}}/>
                <div className="introduce">
			        <h3>술 빚는 원숭이</h3>
			        <p> Price : 2.1 <br/> <br/>
				    Taste : 갈릭베이스에 새우가 들어간 감바스<br/> <br/>
                    원산지 : 국산
                    <br/>
				
			
			        </p>
		        </div>
            <hr size="4"  />
            </div>
            술 빚는 원숭이
            <div id="PlusMa">
            <Button  id="Plus" onClick={() => setVolume({
                ...volume, Monkey: volume.Monkey === 10 ? 10 : volume.Monkey + 1
            })}>+ </Button>
            <div id="Count"> {volume.Monkey} </div>
            <Button  id="Minus"  onClick={() => setVolume({
                ...volume, Monkey: volume.Monkey === 0 ? 0 : volume.Monkey - 1
            })}>- </Button>
            </div>
            </Col>   
        </Row>

 


        <Row id ="Menus">
            
            <Col >
            <div className="box">           
            <img src=  {process.env.PUBLIC_URL +"/Korea/Naru.png" }  style={{width : '150px'}}/>
                <div className="introduce">
			        <h3>나루 생 막걸리</h3>
			        <p> Price : 2.1 <br/> <br/>
				    Taste : 갈릭베이스에 새우가 들어간 감바스<br/> <br/>
                    원산지 : 국산
                    <br/>
				
			
			        </p>
		        </div>
            <hr size="4"  />
            </div>
            나루 생 막걸리
            <div id="PlusMa">
            <Button  id="Plus" onClick={() => setVolume({
                ...volume, Naru: volume.Naru === 10 ? 10 : volume.Naru + 1
            })}>+ </Button>
            <div id="Count"> {volume.Naru} </div>
            <Button  id="Minus"  onClick={() => setVolume({
                ...volume, Naru: volume.Naru === 0 ? 0 : volume.Naru - 1
            })}>- </Button>
            </div>
            </Col>   
        </Row>

 
    </Row>
    <Row>
    <Row id ="Menus">
            
            <Col >
            <div className="box">           
            <img src=  {process.env.PUBLIC_URL +"/Korea/nimome.png" }  style={{width : '150px'}}/>
                <div className="introduce">
			        <h3>제주 미모메 </h3>
			        <p> Price : 2.1 <br/> <br/>
				    Taste : 갈릭베이스에 새우가 들어간 감바스<br/> <br/>
                    원산지 : 국산
                    <br/>
				
			
			        </p>
		        </div>
            <hr size="4"  />
            </div>
            제주 미모메 
            <div id="PlusMa">
            <Button  id="Plus" onClick={() => setVolume({
                ...volume, nimome : volume.nimome  === 10 ? 10 : volume.nimome  + 1
            })}>+ </Button>
            <div id="Count"> {volume.nimome } </div>
            <Button  id="Minus"  onClick={() => setVolume({
                ...volume, nimome : volume.nimome  === 0 ? 0 : volume.nimome  - 1
            })}>- </Button>
            </div>
            </Col>   
        </Row>

            
        <Row id ="Menus">
            
            <Col >
            <div className="box">           
            <img src=  {process.env.PUBLIC_URL +"/Korea/OdiRang.png" }  style={{width : '150px'}}/>
                <div className="introduce">
			        <h3>오디랑 </h3>
			        <p> Price : 2.1 <br/> <br/>
				    Taste : 갈릭베이스에 새우가 들어간 감바스<br/> <br/>
                    원산지 : 국산
                    <br/>
				
			
			        </p>
		        </div>
            <hr size="4"  />
            </div>
            오디랑 
            <div id="PlusMa">
            <Button  id="Plus" onClick={() => setVolume({
                ...volume, OdiRang : volume.OdiRang  === 10 ? 10 : volume.OdiRang  + 1
            })}>+ </Button>
            <div id="Count"> {volume.OdiRang } </div>
            <Button  id="Minus"  onClick={() => setVolume({
                ...volume, OdiRang : volume.OdiRang  === 0 ? 0 : volume.OdiRang  - 1
            })}>- </Button>
            </div>
            </Col>   
        </Row>

        <Row id ="Menus">
            
            <Col >
            <div className="box">           
            <img src=  {process.env.PUBLIC_URL +"/Korea/Omiza.png" }  style={{width : '150px'}}/>
                <div className="introduce">
			        <h3>장수 오미자주 </h3>
			        <p> Price : 2.1 <br/> <br/>
				    Taste : 갈릭베이스에 새우가 들어간 감바스<br/> <br/>
                    원산지 : 국산
                    <br/>
				
			
			        </p>
		        </div>
            <hr size="4"  />
            </div>
            장수 오미자주 
            <div id="PlusMa">
            <Button  id="Plus" onClick={() => setVolume({
                ...volume, Omiza : volume.Omiza  === 10 ? 10 : volume.Omiza  + 1
            })}>+ </Button>
            <div id="Count"> {volume.Omiza } </div>
            <Button  id="Minus"  onClick={() => setVolume({
                ...volume, Omiza : volume.Omiza  === 0 ? 0 : volume.Omiza  - 1
            })}>- </Button>
            </div>
            </Col>   
        </Row>

        <Row id ="Menus">
            
            <Col >
            <div className="box">           
            <img src=  {process.env.PUBLIC_URL +"/Korea/OneSoju.png" }  style={{width : '150px'}}/>
                <div className="introduce">
			        <h3>OneSoju </h3>
			        <p> Price : 2.1 <br/> <br/>
				    Taste : 갈릭베이스에 새우가 들어간 감바스<br/> <br/>
                    원산지 : 국산
                    <br/>
				
			
			        </p>
		        </div>
            <hr size="4"  />
            </div>
            OneSoju 
            <div id="PlusMa">
            <Button  id="Plus" onClick={() => setVolume({
                ...volume, OneSoju : volume.OneSoju  === 10 ? 10 : volume.OneSoju  + 1
            })}>+ </Button>
            <div id="Count"> {volume.OneSoju } </div>
            <Button  id="Minus"  onClick={() => setVolume({
                ...volume, OneSoju : volume.OneSoju  === 0 ? 0 : volume.OneSoju  - 1
            })}>- </Button>
            </div>
            </Col>   
        </Row>


        <Row id ="Menus">
            
            <Col >
            <div className="box">           
            <img src=  {process.env.PUBLIC_URL +"/Korea/Peach.png" }  style={{width : '150px'}}/>
                <div className="introduce">
			        <h3>복숭아 와인 </h3>
			        <p> Price : 2.1 <br/> <br/>
				    Taste : 갈릭베이스에 새우가 들어간 감바스<br/> <br/>
                    원산지 : 국산
                    <br/>
				
			
			        </p>
		        </div>
            <hr size="4"  />
            </div>
            복숭아 와인 
            <div id="PlusMa">
            <Button  id="Plus" onClick={() => setVolume({
                ...volume, Peach : volume.Peach  === 10 ? 10 : volume.Peach  + 1
            })}>+ </Button>
            <div id="Count"> {volume.Peach } </div>
            <Button  id="Minus"  onClick={() => setVolume({
                ...volume, Peach : volume.Peach  === 0 ? 0 : volume.Peach  - 1
            })}>- </Button>
            </div>
            </Col>   
        </Row>



        <Row id ="Menus">
            
            <Col >
            <div className="box">           
            <img src=  {process.env.PUBLIC_URL +"/Korea/purpleJin.png" }  style={{width : '150px'}}/>
                <div className="introduce">
			        <h3>퍼플 진 </h3>
			        <p> Price : 2.1 <br/> <br/>
				    Taste : 갈릭베이스에 새우가 들어간 감바스<br/> <br/>
                    원산지 : 국산
                    <br/>
				
			
			        </p>
		        </div>
            <hr size="4"  />
            </div>
            퍼플 진 
            <div id="PlusMa">
            <Button  id="Plus" onClick={() => setVolume({
                ...volume, purpleJin : volume.purpleJin  === 10 ? 10 : volume.purpleJin  + 1
            })}>+ </Button>
            <div id="Count"> {volume.purpleJin } </div>
            <Button  id="Minus"  onClick={() => setVolume({
                ...volume, purpleJin : volume.purpleJin  === 0 ? 0 : volume.purpleJin  - 1
            })}>- </Button>
            </div>
            </Col>   
        </Row>


        <Row id ="Menus">
            
            <Col >
            <div className="box">           
            <img src=  {process.env.PUBLIC_URL +"/Korea/Rye.png" }  style={{width : '150px'}}/>
                <div className="introduce">
			        <h3>고구려 려 </h3>
			        <p> Price : 2.1 <br/> <br/>
				    Taste : 갈릭베이스에 새우가 들어간 감바스<br/> <br/>
                    원산지 : 국산
                    <br/>
				
			
			        </p>
		        </div>
            <hr size="4"  />
            </div>
            고구려 려
            <div id="PlusMa">
            <Button  id="Plus" onClick={() => setVolume({
                ...volume, Rye : volume.Rye  === 10 ? 10 : volume.Rye  + 1
            })}>+ </Button>
            <div id="Count"> {volume.Rye } </div>
            <Button  id="Minus"  onClick={() => setVolume({
                ...volume, Rye : volume.Rye  === 0 ? 0 : volume.Rye  - 1
            })}>- </Button>
            </div>
            </Col>   
        </Row>


        <Row id ="Menus">
            
            <Col >
            <div className="box">           
            <img src=  {process.env.PUBLIC_URL +"/Korea/SuloCity.png" }  style={{width : '150px'}}/>
                <div className="introduce">
			        <h3>술로시티 </h3>
			        <p> Price : 2.1 <br/> <br/>
				    Taste : 갈릭베이스에 새우가 들어간 감바스<br/> <br/>
                    원산지 : 국산
                    <br/>
				
			
			        </p>
		        </div>
            <hr size="4"  />
            </div>
            Rye 
            <div id="PlusMa">
            <Button  id="Plus" onClick={() => setVolume({
                ...volume, SuloCity : volume.SuloCity  === 10 ? 10 : volume.SuloCity  + 1
            })}>+ </Button>
            <div id="Count"> {volume.Rye } </div>
            <Button  id="Minus"  onClick={() => setVolume({
                ...volume, SuloCity : volume.SuloCity  === 0 ? 0 : volume.SuloCity  - 1
            })}>- </Button>
            </div>
            </Col>   
        </Row>


        </Row>


 
</Container>


</>


    )
};


export default Korean;