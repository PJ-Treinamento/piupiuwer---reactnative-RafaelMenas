import styled from "styled-components/native";

export const PiusWrapper = styled.View`
  display: flex;
  flex-direction: column;
`;
export const PrincipalWrapper = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img {
    object-fit: cover;
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    margin: 1.5rem 1rem 1.5rem 1.5rem;
  }
`;

export const ImageText = styled.View`
`;

export const FirstName = styled.Text`
  margin-right: 45rem;
  font-size: Belgrano;
`;

export const Arroba = styled.Text`
  margin-right: 2rem;
  margin-top: 4rem;
  font-size: Belgrano;
`;
export const PiuTextWrapper = styled.View`
  display: flex;
  flex-direction: column;
`;
export const Text = styled.Text`
  font-size: 2rem;
  height: 12rem;
  margin: 2rem 0 0 2rem;
  font-size: Belgrano;
`;
export const InterationsWrapper = styled.View`
  display: flex;
  margin: 2rem;
  justify-content: space-between;
  p {
    font-size: 2rem;
  }
  input {
    padding: -40rem;
  }
`;
export const ReplieWrapper = styled.View`
  display: flex;
  margin-right: -27rem;
  padding-right: 5rem;
  p {
    margin-left: 1rem;
    font-size: Belgrano;
  }
`;
export const RepiuWrapper = styled.TouchableOpacity`
  display: flex;
  margin-right: -22rem;
  img {
    height: 3rem;
  }
`;
export const LikeWrapper = styled.TouchableOpacity`
  display: flex;
  img {
    height: 3rem;
  }
  p {
    margin-left: 1rem;
    font-size: Belgrano;
  }
`;

export const Buttons = styled.View`
  display: flex;
  button {
    color: white;
    height: 3rem;
    width: 9rem;
    margin: 1rem;
    background-color: var(--red-default);
    border-radius: 3rem;
    cursor: pointer;
  }
`;
export const DeletePiu = styled.TouchableOpacity<{ delete: boolean }>`
  display: ${(props) => (props.delete ? "initial" : "none")};
`;
