import PenaImg from "../../assets/images/LandingPage/PenaLogo.svg";
import PerfilImg from "../../assets/images/Feed/perfilIcon.svg";

import * as S from "./styles";

function Subjects() {
  return (
    <S.SubjectsWrapper>
      <S.PenaIcon src={PenaImg} alt="Pena" id="penafeed" />
      <S.BoxesWrapper>
        <S.TrendingSubjectsWrapper>
          <S.TrendingSubjectsBox>
            <h3>Top subjects</h3>
            <S.Subjects>
              <S.TextSubjectsWrapper>
                <p>aaaaaaaaaaaaaaaaaa</p>
                <p>bbbbbbbbbbbbbbbbbb</p>
                <p>cccccccccccccccccc</p>
              </S.TextSubjectsWrapper>
              <S.ReadMore>read more</S.ReadMore>
            </S.Subjects>
          </S.TrendingSubjectsBox>
        </S.TrendingSubjectsWrapper>
        <S.FollowWrapper>
          <S.FollowBox>
            <h3>People you may know</h3>
            <S.RandomPeoples>
              <S.People>
              <S.PerfilPhoto src={PerfilImg} alt="perfil" />
              <p>name someone</p>
              <button>follow</button>
              </S.People>
              <S.People>
              <S.PerfilPhoto src={PerfilImg} alt="perfil" />
              <p>name someone</p>
              <button>follow</button>
              </S.People>
            </S.RandomPeoples>
            <S.ViewMore>view more</S.ViewMore>
          </S.FollowBox>
        </S.FollowWrapper>
      </S.BoxesWrapper>
    </S.SubjectsWrapper>
  );
}

export default Subjects;
