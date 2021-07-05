import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";

import logoImg from "../../assets/principal/logo.png";

function Landing() {
  const { navigate } = useNavigation();

  const handleNavigateToLogin = () => {
    navigate("Login");
  };

  return (
    <S.LandingWrapper>
        <S.TitleWrapper>
          <S.Logo resizeMode="contain" source={logoImg} />
          <S.TextWrapper>Connect with your friends</S.TextWrapper>
        </S.TitleWrapper>
        <S.ButtonsWrapper>
          <S.Touchable onPress={handleNavigateToLogin}>
            <S.ButtonText>Log in</S.ButtonText>
          </S.Touchable>
          <S.Touchable>
            <S.ButtonText>Create an Account</S.ButtonText>
          </S.Touchable>
        </S.ButtonsWrapper>
    </S.LandingWrapper>
  );
}

export default Landing;
