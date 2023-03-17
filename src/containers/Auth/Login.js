// import {Component, useEffect, useState, useRef} from 'react';
// import userData from "../../local-json/users.json";
// import { InputWithLabel ,RegisterLink } from '../../components/';
// import styled from 'styled-components';
// import oc from 'open-color';
// import { shadow } from '../../lib/styleUtil';
// import { BrowserRouter as Router, Route, Switch , } from "react-router-dom";
// import axios from 'axios';
// import { useCookies } from 'react-cookie';
// const LoginBtn = styled.button`
//   margin-top: 1rem;
//   padding-top: 0.6rem;
//   padding-bottom: 0.5rem;
//   background: #1EBAED;
//   color: white;
//   text-align: center;
//   font-size: 1.25rem;
//   font-weight: 500;
//   display: block;
//   width: 30%;
//   cursor: pointer;
//   user-select: none;
//   transition: .2s all;
//   &:hover {
//     background: #1EBAED;;
//     ${shadow(0)}
//   }
//   &:active {
//     background: #1EBAED;;
//   }
// `;
// const Title = styled.div`
//   font-size: 1.5rem;
//   font-weight: 500;
//   color: ${oc.gray[8]};
//   margin-bottom: 1rem;
// `;
// const Login = (props) => {
//     //카카오 로그인
//     const KAKAO_AUTH_URL = "http://localhost:8080/oauth2/authorization/kakao";
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//
//         // 로그인 요청을 보냅니다.
//         const response = await fetch('http://localhost:8080/login', {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({'userId': username, 'userPw': password})
//         });
//         if (response.ok) {
//             console.log("성공!!")
//             // Access Token을 받아서 로컬 스토리지에 저장합니다.
//             // const {accessToken} = await header
//             let accessToken =response.headers.get("Authorization").substring(7)
//             console.log(accessToken)
//             localStorage.setItem('accessToken', accessToken);
//             console.log("통과2" + accessToken)
//             // 로그인이 성공한 경우 메인 페이지로 이동합니다.
//             window.location.href = 'http://localhost:3000/Menu/MenuContents';
//         } else {
//             // 로그인이 실패한 경우 오류 메시지를 표시합니다.
//             const error = await response.text();
//             alert(error + "에러다 임마");
//         }
//     };
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <Title>로그인</Title>
//             <InputWithLabel type="text" value={username} onChange={event => setUsername(event.target.value)} label="아이디"
//                             placeholder="아이디"/>
//             <InputWithLabel type="password" value={password} onChange={event => setPassword(event.target.value)}
//                             label="비밀번호" placeholder="비밀번호"/>
//             <LoginBtn type="submit">로그인</LoginBtn>
//         </form>
//     );
//
// }
// export default Login;

import {Component, useEffect, useState, useRef} from 'react';
import userData from "../../local-json/users.json";
import { InputWithLabel ,RegisterLink } from '../../components/';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../lib/styleUtil';
import { BrowserRouter as Router, Route, Switch , } from "react-router-dom";
import axios from 'axios';
import { useCookies } from 'react-cookie';
const LoginBtn = styled.button`
    margin-top: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.5rem;
    background: #1EBAED;
    color: white;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;
    display: block;
    width: 30%;
    cursor: pointer;
    user-select: none;
    transition: .2s all;
    &:hover {
        background: #1EBAED;;
        ${shadow(0)}
    }
    &:active {
        background: #1EBAED;;
    }
`;
const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    color: ${oc.gray[8]};
    margin-bottom: 1rem;
`;
const Login = (props) => {

    const KAKAO_AUTH_URL = "http://localhost:8080/oauth2/authorization/kakao";
    //자체서버 로그인 토큰 저장
    const [userId, setUserId] = useState("")
    const [userPw, setUserPw] = useState("")
    const handleSubmit = async (event) =>{
            let data = { "userId":userId,"userPw":userPw };
            axios.post("http://localhost:8080/login" ,data,{
                headers: {
                    "Content-Type": `application/json`,
                } })
                .then(response =>{
                    console.log("성공")
            // Access Token을 받아서 로컬 스토리지에 저장합니다.
            let accessToken =response.headers.get("Authorization").substring(7)
            localStorage.setItem('accessToken', accessToken);
            // 로그인이 성공한 경우 메인 페이지로 이동합니다.
            window.location.href = 'http://localhost:3000/Menu/MenuContents';

                })
                .catch(ex=>{
                    console.log("로그인 실패 : " + ex);
                })
                .finally(()=>{
                    console.log("login request end");
                });
    }

    useEffect(()=>{
        console.log("LoginPage render ... ");
    })

    return(
    <>
        <form onSubmit={handleSubmit} >
        <Title>로그인</Title>
        <InputWithLabel onChange={e => setUserId(e.target.value)} label="아이디" name="userId" placeholder="아이디"/>
        <InputWithLabel onChange={e => setUserPw(e.target.value)} label="비밀번호" name="password" placeholder="비밀번호" type="password"/>
        <LoginBtn type="submit">로그인</LoginBtn>

    </form>

        <a
            type="submit"
            href={KAKAO_AUTH_URL} >
            <img src={process.env.PUBLIC_URL +"/kakao_login.png"} alt="kakao login" />
        </a>

        <RegisterLink to="/auth/register">회원가입</RegisterLink>
    </>
    )
}

export default Login;