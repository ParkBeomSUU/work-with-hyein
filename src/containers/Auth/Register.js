import react, {Component} from 'react';
import userData from "../../local-json/users.json";
import { Content,InputWithLabel, LoginButton, RegisterLink} from '../../components/';


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

                <LoginButton>회원가입</LoginButton>
                <RegisterLink to="/auth/login">로그인</RegisterLink>
            </Content>
        );
    }
}

export default Register;
//유효성 검사하기 