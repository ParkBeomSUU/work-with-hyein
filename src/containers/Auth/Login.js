import react, {Component} from 'react';
import userData from "../../local-json/users.json";
import { Content, InputWithLabel, LoginButton ,RegisterLink } from '../../components/';

class Login extends Component {
    render() {
        console.log('userData', userData)
        let id= JSON.stringify(userData[0].userId);
        console.log('id ', id);
        
        return (
            <Content title="로그인">
                <InputWithLabel label="이메일" name="email" placeholder="이메일"/>
                <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password"/>
                <LoginButton>로그인</LoginButton>
                <RegisterLink to="/auth/register">회원가입</RegisterLink>
            </Content>
        );
    }
}

export default Login;