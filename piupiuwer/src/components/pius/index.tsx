import * as S from "./styles";

import { useAuth } from "../../hooks/useAuth";
import api from "../../../service/api";
import { IPiu } from "../../models";
import { useEffect, useState } from "react";

import Loading from "../../assets/Feed/LoadGif.gif";
import Like from "../../assets/Feed/likeIcon.png";
import Likered from "../../assets/Feed/likeredIcon.png";
import Repiu from "../../assets/Feed/Repiu.png";
import RepiuRed from "../../assets/Feed/RepiuRed.png";
import Replie from "../../assets/Feed/replieIcon.png";

const Pius: React.FC<IPiu> = ({ user, likes, text, id }) => {
  const { token } = useAuth();
  const { user: User } = useAuth();

  const deletePiu = async (piu_id: string) => {
    if(user.username === User.username) {
    await api.delete("/pius", {
      headers: { Authorization: `Bearer ${token}` },
      data: {
        piu_id,
      },
    });
    window.location.reload();
    }
  };


  const [redLike, setRedLike] = useState(Loading);
  const [numLike, setnumLike] = useState(likes.length);

  const likePius = async (piu_id: string) => {
    const responseLike = await api.post(
      "/pius/like",
      { piu_id: piu_id },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (responseLike.data.operation === "like") {
      setRedLike(Likered);
      setnumLike(numLike + 1);
    } else {
      setRedLike(Like);
      setnumLike(numLike - 1);
    }
  };

  const GetMyFav = async () => {
    const response = await api.get(
      `/users?username=${User.username}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    let fav = false;
    fav = response.data[0].favorites.some((favorite:any) => {
         return id === favorite.id
      });
      console.log(fav);
    if (fav === true) {
      setRedFav(RepiuRed);
    } else {
      setRedFav(Repiu);
    }
  }

  const GetMyLikes = async () => {
    const response = await api.get(
      `/users?username=${User.username}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    let liked = false;
    liked = likes.some((like) => {
      return like.user.id === response.data[0].id;
    });
    console.log(liked);
    if (liked === true) {
      setRedLike(Likered);
    } else {
      setRedLike(Like);
    }
  };

  const [redFav, setRedFav] = useState(Loading);

  const favoritePius = async (piu_id: string) => {
    try {
      await api.post(
        "/pius/favorite",
        { piu_id: piu_id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const unfavoritePius = async (piu_id: string) => {
    try {
      await api.post(
        "/pius/unfavorite",
        { piu_id: piu_id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const favunfav = () => {
    if (redFav === Repiu) {
      setRedFav(RepiuRed);
      favoritePius(id);
    }
    if (redFav === RepiuRed) {
      unfavoritePius(id);
      setRedFav(Repiu);
    }
  };

  const Follow = async (followed_id: string) => {
    const responseFollow = await api.post("/follow", {
      headers: { Authorization: `Bearer ${token}` },
      data: {
        followed_id,
      },
    });
    console.log(responseFollow);
  };

  useEffect(() => {
    GetMyLikes();
    GetMyFav();
  }, []);

  return (
    <S.PiusWrapper>
      <S.PrincipalWrapper>
        <S.ImageText>
        <img src={user.photo} alt="imagem de perfil" />
        <S.FirstName>{user.first_name}</S.FirstName>
        </S.ImageText>
        <S.Arroba>{"@" + user.username}</S.Arroba>
      </S.PrincipalWrapper>
      <S.PiuTextWrapper>
        <S.Text>{text}</S.Text>
        <S.InterationsWrapper>
          <S.ReplieWrapper>
            <img src={Replie} alt="Replie" />
            <p>100</p>
          </S.ReplieWrapper>
          <S.RepiuWrapper onPress={() => favunfav()}>
            <img src={redFav} alt="Repiu" />
          </S.RepiuWrapper>
          <S.LikeWrapper
            onPress={() => {
              likePius(id);
            }}
          >
            <img src={redLike} alt="Like" />
            <p style={{ color: redLike === Likered ? "red" : "black" }}>
              {numLike}
            </p>
          </S.LikeWrapper>
          <S.Buttons>
          <S.DeletePiu delete={user.username===User.username} onPress={() => deletePiu(id)}>Apagar</S.DeletePiu>
          <button onClick={() => Follow(id)}>follow</button>
          </S.Buttons>
        </S.InterationsWrapper>
      </S.PiuTextWrapper>
    </S.PiusWrapper>
  );
};

export default Pius;