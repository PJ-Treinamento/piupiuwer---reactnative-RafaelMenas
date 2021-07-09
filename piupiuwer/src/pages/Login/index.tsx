import React, { useState } from "react";
import ArrowBack from "../../assets/principal/Arrow.png";
import { TouchableOpacity, Text } from 'react-native';

import * as S from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";

function Login() {
  const {login} = useAuth();

  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  const { navigate } = useNavigation();

  function handleGoBack(){
    navigate('Landing');
  }
  
    return (
    <S.LoginWrapper>
      <S.ButtonBack onPress={handleGoBack}>
        <S.BackImg source={ArrowBack} resizeMode="contain" />
      </S.ButtonBack>
      <S.BlockWrapper>
        <S.InputsEmailPassword>
          <S.Input placeholder="email" onChangeText={text => setEmailInput(text)} value={emailInput}></S.Input>
          <S.Input placeholder="password" onChangeText={text => setPasswordInput(text)} value={passwordInput}></S.Input>
        </S.InputsEmailPassword>
        
        <S.Buttons>
          <S.LoginButton onPress={() => login({ email: emailInput, password: passwordInput })}>
            <S.LogInText>Log In</S.LogInText>
          </S.LoginButton>
          <S.ForgotButton>
            <S.ForgotText>Forgot your password?</S.ForgotText>
          </S.ForgotButton>
        </S.Buttons>
      </S.BlockWrapper>
    </S.LoginWrapper>
  );
}

export default Login;
