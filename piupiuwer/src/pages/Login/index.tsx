import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import ArrowBack from "../../assets/principal/Arrow.png";

import * as S from "./styles";

function Login() {
  
    return (
    <S.LoginWrapper>
        <S.ButtonBackToLanding source={ArrowBack} />
      <S.BlockWrapper>
        <S.Inputs>
          <S.Email>Email</S.Email>
          <S.Password>Password</S.Password>
        </S.Inputs>
        <S.ButtonForgotPassword>
          <S.LoginButton>
            <S.LogInText>Log In</S.LogInText>
          </S.LoginButton>
          <S.ForgotPasswordText>Forgot your password?</S.ForgotPasswordText>
        </S.ButtonForgotPassword>
      </S.BlockWrapper>
    </S.LoginWrapper>
  );
}

export default Login;
