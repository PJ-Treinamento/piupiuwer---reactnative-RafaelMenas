import styled from "styled-components";

export const SubjectsWrapper = styled.div`
  width: 30vw;
  height: 88vh;
  position: absolute;
  right: 0rem;
  top: 6vh;
  position: fixed;
`;
export const PenaIcon = styled.img`
  height: 5rem;
  position: absolute;
  right: 1rem;
  top: 8rem;
`;
export const BoxesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const TrendingSubjectsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 15rem;
  border: 3px solid var(--red-default);
  width: 60%;
  height: 40rem;
  border-radius: 2rem;
`;
export const TrendingSubjectsBox = styled.div`
  margin: 3rem;
  h3 {
    margin-top: -1rem;
    margin-bottom: 2rem;
    margin-left: 9rem;
  }
`;

export const Subjects = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #EFEFEF;
  width: 30rem;
  border-radius: 3rem;
`;

export const TextSubjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  p {
    height: 6rem;
    margin: 1rem;
    padding: 1.5rem 0 0 6rem;
    background-color: white;
    border-radius: 5rem;
    border: 1px solid var(--red-default);
  }
`;

export const ReadMore = styled.p`
  margin: 3rem 0 1rem 11rem;
  color: red;
`;

export const FollowWrapper = styled.div`
  margin-top: 5rem;
`;
export const FollowBox = styled.div`
  border: 3px solid var(--red-default);
  display: flex;
  flex-direction: column;
  height: 27rem;
  border-radius: 3rem;
  h3 {
    margin: 2rem 0 1rem 6rem;

  }
`;

export const PerfilPhoto = styled.img`
  height: 4rem;
`;

export const RandomPeoples = styled.div`
    display: flex;
    flex-direction: column;
`;

export const People = styled.div`
  display: flex;
  border: 1px solid grey;
  height: 6rem;
  border-radius: 2rem;
  padding-top: 1rem;
  margin: 0.7rem;
  img {
    padding-left: 1rem;
  }
  p {
    padding-top: 0.4rem;
    padding-left: 1rem;
  }
  width: 30rem;
  button {
    margin-left: 2rem;
    height: 4rem;
    width: 8rem;
    border-radius: 3rem;
    cursor:pointer;
    background-color: var(--red-default);
    color: white;
  }
`;

export const ViewMore = styled.p`
    margin: 1rem 0 0 12rem;
    color: red;
`;
