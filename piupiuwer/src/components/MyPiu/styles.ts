import styled from "styled-components";

export const MyPiuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  img {
    width: 8rem;
    border-radius: 5rem;
  }
`;

export const PrincipalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  img {
    margin: 1rem;
  }
`;

export const TextPiuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 16rem;
  button {
    width: 10rem;
    height: 5rem;
    cursor: pointer;
    margin: 4rem 0 2rem 85%;
    border-radius: 3rem;
    background-color: var(--red-default);
    color: white;
  }
  textarea {
    width: 95%;
    height: 40rem;
    border: none;
    resize: none;
    outline: none;
    margin-left: 1rem;
    margin-top: 1rem;
    font-family: Belgrano;
  }
`;

export const Question = styled.p`
  margin-right: 52%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const Arroba = styled.p`
  margin-right: 45%;
  margin-right: 1rem;
  margin-top: 5rem;
  font-family: Belgrano;
`;
