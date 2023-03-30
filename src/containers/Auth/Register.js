
import react, {Component, useEffect, useState} from 'react';
import userData from "../../local-json/users.json";
import { Content, InputWithLabel, RegisterLink } from "../../components/";
import styled from "styled-components";
import { shadow } from "../../lib/styleUtil";
import axios from "axios";

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: gray;
  margin-bottom: 1rem;
`;
//아이디 비번 중복 체크 스타일
const checkIdPw = {
  border : "0",
  marginLeft :"73%",
  marginTop : "4%",
  color : "#1ebaed",
  backgroundColor : "white",
  fontSize: "0.9rem"
  }
  
const LoginBtn = styled.button`
  margin-top: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.5rem;

  background: #1ebaed;
  color: white;

  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;

  display: block;
  width: 100%;

  cursor: pointer;
  user-select: none;
  transition: 0.2s all;

  &:hover {
    background: #1ebaed;
    ${shadow(0)}
  }

  &:active {
    background: #1ebaed;
  }
`;

const registerFunc = async (value) => await axios.post('http://localhost:8080/join',
              {"userId":value.UserId, "userPw":value.UserPw,"tableNum":value.tableNum,"userNick":value.userNick});


            
const Register = () => {
   
        const [UserId, setUserId] = useState("");
        const [UserPw,setUserPw] = useState("");
        const [tableNum,setTableNum]= useState(0);
        const [userNick,setuserNick] = useState("");
        //비밀번호 일치 불일치 판단
        const [confirmPw, setConfirmPw] = useState("");
        // 비번 일치 안되면 회원가입 안되도록 함
        const [match, setMatch] = useState(null);
        
        //아이지 중복체크
        const dupleId = ()=>{
          axios.post('http://localhost:8080/checkId',{"userId":UserId}).then(response=>{
              if(response.data){
                  return response.data
              }
              else{
                  return false;
                      }
                  })
              }
      //비밀번호 중복체크
      const handlePwChange = (e) => {
        setUserPw(e.target.value);
      };
      
      const handleConfirmPwChange = (e) => {
        setConfirmPw(e.target.value);
      };

      useEffect(() => {

        if(UserPw === "" || confirmPw === ""){
          setMatch(null);
          return;
        }
        if (UserPw === confirmPw) {
          setMatch(true);
        } else {
          setMatch(false);
        }


      }, [UserPw, confirmPw])

      //버튼느낌 비밀번호확인
      
      // const handleCheckPw = () => {

      //   if (UserPw === confirmPw) {
      //     setMatch(true);
      //   } else {
      //     setMatch(false);
      //   }
      // };

    const SignUp = async (event) => {
            event.preventDefault();
   
            if(tableNum === 0){
                // alert("테이블 번호를 선택해 주세요!")
                return
            }
     
            registerFunc({
                UserId, UserPw, tableNum, userNick
            })
            .then(()=>{
                window.location.href = 'http://localhost:3000/auth/login';})
            .catch(error=>{
                console.log(error.response.data); 
            })
          };


  return (
    <>
      <form
        onSubmit={(e) => {
          SignUp(e);
        }}
      >
        <Title>회원 가입</Title>
        <h6 style={{ color: "black" }}>테이블 번호</h6>
        <select
          name="TableNumber"
          style={{ width: "100%" }}
          onChange={(e) => {
            setTableNum(parseInt(e.target.value));
            console.log(tableNum);
          }}
        >
          <option style={{ display: "none" }} value="0" disabled selected>
            테이블을 선택해주세요.
          </option>
          <option value="1">1번 테이블</option>
          <option value="2">2번 테이블</option>
          <option value="3">3번 테이블</option>
          <option value="4">4번 테이블</option>
        </select>
        <button style={checkIdPw} onClick={dupleId}>아이디 중복체크</button>
        {(() => {
              if (dupleId()){return <span>사용가능한 아이디입니다.</span>}
              else{ return <span style={{color:"gray"}}>아이디 중복체크를 해주세요.</span>}
          })()}

            <InputWithLabel
                label="아이디"
                name="userId"
                placeholder="아이디"
                onChange={(e) => setUserId(e.target.value)}
            />
              <div>
    <InputWithLabel
      label="비밀번호"
      name="userPw"
      placeholder="비밀번호"
      type="password"
      value={UserPw}
      onChange={handlePwChange}
    />
    <InputWithLabel
      label="비밀번호 확인"
      name="confirmPw"
      placeholder="비밀번호 확인"
      type="password"
      value={confirmPw}
      onChange={handleConfirmPwChange}
    />
    {/* <button style={checkIdPw} onClick={handleCheckPw}>
      비밀번호 확인
    </button> */}
    {/* {match === true && (
      <p style={{ color: "blue" }}>비밀번호가 일치합니다.</p>
    )}
    {match === false && (
      <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</p>
    )}
              {match === null && <p></p>} */}


              {match === null ? <span></span> : 
              (match ? <span></span> : <span style={{color: "red"}}>비밀번호를 확인해 주세요</span>)}

              {/* {match === null && UserPw !== "" && confirmPw !== "" && (
            <p style={{ color: "gray" }}>비밀번호를 확인해주세요.</p>
          )} */}
  </div>

            <InputWithLabel
              label="닉네임"
              name="userNick"
              placeholder="닉네임"
              onChange={(e) => setuserNick(e.target.value)}
            />

            <LoginBtn type="submit" disabled={!match}
            
            
          >
              회원가입
              {match === null ? <span></span> : 
              match ? <span></span> : <span >  불가</span>}
 
            </LoginBtn>

        <RegisterLink to="/auth/login">로그인</RegisterLink>
      </form>
    </>
  );
};

export default Register;
