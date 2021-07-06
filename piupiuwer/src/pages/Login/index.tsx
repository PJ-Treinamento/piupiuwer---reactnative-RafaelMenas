import React, { useState } from "react";
import ArrowBack from "../../assets/principal/Arrow.png";
import {TextInput} from 'react-native';

import * as S from "./styles";
import { useAuth } from "../../hooks/useAuth";

function Login() {
  const {login} = useAuth();

  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  console.log(emailInput);
  
    return (
    <S.LoginWrapper>
        <S.ButtonBackToLanding source={ArrowBack} />
      <S.BlockWrapper>
        <S.Inputs>
          <S.Email placeholder="email" onChangeText={text => setEmailInput(text)} value={emailInput}></S.Email>
          <S.Password placeholder="password" onChangeText={text => setPasswordInput(text)} value={passwordInput}></S.Password>
        </S.Inputs>
        <S.ButtonForgotPassword>
          <S.LoginButton onPress={() => login({ email: emailInput, password: passwordInput })}>
            <S.LogInText>Log In</S.LogInText>
          </S.LoginButton>
          <S.ForgotPasswordText>Forgot your password?</S.ForgotPasswordText>
        </S.ButtonForgotPassword>
      </S.BlockWrapper>
    </S.LoginWrapper>
  );
}

export default Login;
