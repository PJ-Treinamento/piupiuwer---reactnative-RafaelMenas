import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';

export const LandingWrapper = styled.View`
    flex:1;
    justify-content: space-between;
    align-items: center;
    background-color: #ECE8E8;
`

export const TitleWrapper = styled.View`
    justify-content: space-between;
    margin-top: 300px;
`

export const TextWrapper = styled.Text`
    color: grey;
    font-size: 15px;
    margin-top: -25px;
`
export const Logo = styled.Image`
    justify-content: center;
    width: 300px;
`

export const ButtonsWrapper = styled.View`
    justify-content: center;
    margin-bottom: 120px;
`

export const Touchable = styled.TouchableOpacity`
    align-items: center;
    padding-top: 15px;
    background-color: #FF6B6B;
    width: 220px;
    margin-bottom: 15px;
    height: 50px;
    border-radius: 5px;
    
`

export const ButtonText = styled.Text`
    color: white;
`