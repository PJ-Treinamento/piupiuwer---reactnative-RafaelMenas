import styled from "styled-components/native";

export const LoginWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ff6b6b;
`;

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  top: 60px;
  left: 30px;
`;

export const BackImg = styled.Image`
  transform: rotate(-90deg);
  width: 30px;
  height: 30px;
`;
export const BlockWrapper = styled.View`
  height: 50%;
  width: 80%;
  margin-top: 50px;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 20px;
`;
export const InputsEmailPassword = styled.View`
    margin-top:70px;
    width: 100%;
`;
export const Input = styled.TextInput`
    margin: 0 20px 40px 40px;
    width: 80%;
    border: 1px solid grey;
    padding: 10px;
    border-radius: 10px;
`;

export const Buttons = styled.View`
    width: 100%;
    align-items: center;
`;
export const LoginButton = styled.TouchableOpacity`
    width: 30%;
    height: 30%;
    background-color: #FF6B6B;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    margin-bottom: 40px;
`;
export const LogInText = styled.Text`
    font-size: 20px;
    color: white;
`;

export const ForgotButton = styled.Text`
    
`;

export const ForgotText = styled.Text`
    font-size: 12px;
`;
