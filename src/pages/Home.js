import React from 'react';
import styled from 'styled-components';
import { shadow } from '../lib/styleUtil';
import { Link } from 'react-router-dom';
import "./Home.css";






// 화면의 살짝 아래
const Positioner = styled.div`
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// 너비, 그림자 설정
// const ShadowedBox = styled.div`
//     width: 200px;
//     ${shadow(2)}
// `;

// 로고
const LogoWrapper = styled.div`
    background-color : transparent;
    border : 3px solid rgb(17 202 240);
    height: 6rem;
    width : 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius : 15px;
    margin: 0 auto;
    

    
`;

const Logo = styled(Link)`
    color: rgb(17 202 240);
    font-size: 3rem;
    letter-spacing: 5px;
    text-decoration: none;
  
`;



const Neon = () =>{
    return(
        <div class="container">
  <svg viewBox="0 0 960 300">
    <symbol id="s-text">
      <text text-anchor="middle" x="50%" y="80%">ECUZO</text>
    </symbol>

    <g class = "g-ants">
      <use xlinkHref="#s-text" class="text-copy"></use>
      <use xlinkHref="#s-text" class="text-copy"></use>
      <use xlinkHref="#s-text" class="text-copy"></use>
      <use xlinkHref="#s-text" class="text-copy"></use>
      <use xlinkHref="#s-text" class="text-copy"></use>
    </g>
  </svg>
</div>
    )
}

const ContentHeader = ({children}) => (
    
    <>
        <Neon />
        
        <Positioner>
            
                <LogoWrapper>
                    <Logo to="/auth/login">LOGIN</Logo>
                </LogoWrapper>
            
        </Positioner>
    </>
    
);

export default ContentHeader;