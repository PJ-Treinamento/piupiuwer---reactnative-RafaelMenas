import styled from "styled-components";

export const Browser = styled.div`
  width: 20vw;
  height: 75vh;
  position: absolute;
  left: 0rem;
  top: 12vh;
  border: 0.1rem solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: fixed;
`;

export const ToolsWrapper = styled.div`
  margin: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 0.1rem solid;
  width: 30rem;
  img {
    margin-right: 3rem;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

export const IconHomeWrapper = styled.div`
  display: flex;
  align-items:center;
  p{
      margin-top:1rem;
  }
`;
export const IconExploreWrapper = styled.div`
  display: flex;
  align-items:center;
  p{
      margin-top:1rem;
  }
`;
export const IconNotificationsWrapper = styled.div`
  display: flex;
  align-items:center;
  img {
      margin-left:4rem;
  }
  p{
      margin-top:1rem;
  }
`;
export const IconMessagesWrapper = styled.div`
  display: flex;
  align-items:center;
  p{
      margin-top:1rem;
  }
`;
export const IconMoreToolsWrapper = styled.div`
  display: flex;
  align-items:center;
  p{
      margin-top:1rem;
  }
`;

export const LogOut = styled.button`
  margin-bottom: 10rem;
  height: 10rem;
  width: 26rem;
  background-color: var(--red-default);
  border: 0.1rem solid;
  border-radius: 2rem;
  color: white;
  font-size: 4rem;
  cursor: pointer;
`;
