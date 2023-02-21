import react, {Component} from 'react';
import userData from "../../local-json/users.json";
import { InputWithLabel ,RegisterLink } from '../../components/';
import styled from 'styled-components';
import oc from 'open-color';

import { shadow } from '../../lib/styleUtil';


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
    width: 100%;

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


class Login extends Component {
    //리액트에서는 document안됨

    //변수,함수 내부멤버에는 const 안붙임

    handleSubmit = (e) => {
        e.preventDefault()
        
        // JSON 파일에서 가져온 모의 회원 정보 
        const { userEmail, userPw } = userData[0]
        console.log(userEmail, userPw)

        // 폼에다 입력한 정보 읽어온 것 
        const inputEmail = e.target.email.value
        const inputPw = e.target.password.value

        if(userEmail === inputEmail && userPw === inputPw){
            alert("로그인 성공")
            // 다른 화면으로 넘어가기 
        }else{
            alert("로그인 실패")
        }

        /*
        alert(
            userEmail === inputEmail && userPw === inputPw ? 
            "로그인 성공" : "로그인 실패"
        )
        */
        
    }


    render() {
        console.log('userData', userData)
        let id= JSON.stringify(userData[0].userId);
        console.log('id ', id);

        return (
            <form onSubmit={this.handleSubmit}>
                <Title>로그인</Title>
                <InputWithLabel label="이메일" id ="email" name="email" placeholder="이메일"/>
                <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password"/>
                <LoginBtn type="submit">로그인</LoginBtn>
                <RegisterLink to="/auth/register">회원가입</RegisterLink>
            </form>
        );
    }
}

export default Login;