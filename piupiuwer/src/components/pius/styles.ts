import styled from "styled-components/native";

export const PiusWrapper = styled.View`
  margin: 0 20px 20px 20px;
`;

export const PrincipalWrapper = styled.View`
  flex-direction: row;
  background-color: white;
  border: 1px solid grey;
`;

export const ImageText = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PerfilImg = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin: 10px;
`;

export const FirstName = styled.Text`
  font-size: 18px;
`;

export const Arroba = styled.Text`
  position: absolute;
  bottom: 5px;
  right: 10px;
`;
export const PiuTextWrapper = styled.View`
  padding: 15px 0 10px 15px;
  background-color: white;
  border: 1px solid grey;
`;
export const PiuText = styled.Text`
  margin-bottom: 50px;
`;
export const InterationsWrapper = styled.View`
  flex-direction: row;
`;
export const ReplieWrapper = styled.View`
  flex-direction: row;
  margin-right: 15px;
`;

export const ReplieNumber = styled.Text`
  margin: 5px 0 0 5px;
`;

export const ReactIcon = styled.Image`
  width: 30px;
  height: 30px;
`;

export const RepiuWrapper = styled.TouchableOpacity`
  flex-direction: row;
  margin-right: 15px;
`;

export const LikeWrapper = styled.TouchableOpacity`
  flex-direction: row;
`;

export const LikeNumber = styled.Text`
  margin: 5px 0 0 5px;
`;

export const ButtonFollow = styled.TouchableOpacity`
  margin-left: 15px;
  background-color: #ff6b6b;
  padding: 5px;
`;

export const TextFollow = styled.Text`
  color: white;
`;

export const Buttons = styled.View`
  flex-direction: row;
  margin-left: 35px;
`;
export const DeletePiu = styled.TouchableOpacity<{ delete: boolean }>`
  background-color: #ff6b6b;
  padding: 5px;
  display: ${(props) => (props.delete ? "flex" : "none")};
`;

export const TextDelete = styled.Text`
  color: white;
`;
