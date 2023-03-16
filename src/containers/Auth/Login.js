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
    
    //카카오 로그인
    const REST_API_KEY = "8948a4eef1e5e49c9bf9a77d394f04db";
    const REDIRECT_URI ="http://localhost:3000/Menu/MenuContents";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const KAKAO_LOGOUT_URL ='http://localhost:3000'
    const [kperson, setKPerson] = useState('')

 
    console.log(window.location)
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    useEffect(() => {
      if(code !== null) {
          axios.get('http://localhost:8080/login',
                  {params: {code: code}}
              ).then(response => { 
                  console.log(response)
                  setKPerson(response.data)

              }).then(() => {
                  window.history.replaceState(kperson, null, "http://localhost:3000/Menu/MenuContents")
              })
      }
    })


    //자체서버 로그인 토큰 저장
    const [userId, setUserId] = useState("")
    const [userPw, setUserPw] = useState("")


    const handleClick = () => {
        try{
          let data = { userId  ,userPw  };
          axios.post("http://localhost:8080/login" ,JSON.stringify(data), {
              headers: {
                "Content-Type": `application/json`,
                
              }
        
            })
          .then(res =>{
              console.log("res.data.accessToken : " + res.data);
              axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data;
            //   setUserId(true);
            //   setUserPw(true);
            // if(잘됏으면)
              window.history.replaceState("http://localhost:3000/Menu/MenuContents")

          })
          .catch(ex=>{
              console.log("로그인 실패 : " + ex);
          })
          .finally(()=>{
            console.log("login request end");
          });
      }catch(e){
          console.log(e);
      }
    }


    return <form  >
        <Title>로그인</Title>
        <InputWithLabel onChange={e => setUserId(e.target.value)} label="아이디" name="userId" placeholder="아이디"/>
        <InputWithLabel onChange={e => setUserPw(e.target.value)} label="비밀번호" name="password" placeholder="비밀번호" type="password"/>
        <LoginBtn type="submit" onClick={handleClick}>로그인</LoginBtn>
    <a
            type="submit"
            href={KAKAO_AUTH_URL} >
          <img src={process.env.PUBLIC_URL +"/kakao_login.png"} alt="kakao login" />
          </a>

        <RegisterLink to="/auth/register">회원가입</RegisterLink>
    </form>
}

export default Login;