import react, {Component} from 'react';
import userData from "../../local-json/users.json";
import { Content,InputWithLabel, RegisterLink} from '../../components/';
import styled from 'styled-components';
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

class Register extends Component {
    render() {
        console.log('userData', userData)
        let id= JSON.stringify(userData[0].userId);
        console.log('id ', id);

        return (

            <Content title="회원가입">
                <InputWithLabel label="이메일" name="userEmail" placeholder="이메일"/>
                <InputWithLabel label="아이디" name="userId" placeholder="아이디"/>
                <InputWithLabel label="비밀번호" name="userPw" placeholder="비밀번호" type="password"/>
                <InputWithLabel label="비밀번호 확인" name="userPw" placeholder="비밀번호 확인" type="password"/>
                <InputWithLabel label=" 닉네임" name="userNick" placeholder="닉네임" />

                <LoginBtn>회원가입</LoginBtn>
                <RegisterLink to="/auth/login">로그인</RegisterLink>
            </Content>
        );
    }
}

export default Register;
//유효성 검사하기 