import React, { useCallback, useEffect, useState } from "react";
import {Text , Image} from 'react-native';

import * as S from "./styles";

import { useAuth } from "../../hooks/useAuth";
import api from "../../../service/api";
import { IPiu } from "../../models";

import Loading from "../../assets/Feed/LoadGif.gif";
import Like from "../../assets/Feed/likeIcon.png";
import Likered from "../../assets/Feed/likeredIcon.png";
import Repiu from "../../assets/Feed/Repiu.png";
import RepiuRed from "../../assets/Feed/RepiuRed.png";
import Replie from "../../assets/Feed/replieIcon.png";

const Pius: React.FC<IPiu> = ({ user, likes, text, id, myInfos }) => {
  const { user: myUser, token, setReload, reload } = useAuth();

  console.log(myInfos);

  const [redLike, setRedLike] = useState(Loading);
  const [numLike, setnumLike] = useState(likes.length);

  const [redFav, setRedFav] = useState(Loading);

  const deletePiu = useCallback(async (piu_id: string) => {
    try {
      if(user.username === myUser.username) {
        await api.delete("/pius", {
          headers: { Authorization: `Bearer ${token}` },
          data: {
            piu_id: id, 
          },
        });
        setReload(!reload);
        }
    } catch (error) {
      console.log("TA DANDO ERRO NO DELETE");
    }
  }, []);

  const likePius = useCallback(async (piu_id: string) => {
    try {
      const responseLike = await api.post(
        "/pius/like",
        { piu_id: piu_id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (responseLike.data.operation === "like") {
        setRedLike(Likered);
        setnumLike(numLike+1);
      } else {
        setRedLike(Like);
        setnumLike(numLike-1);
      }
    } catch (error) {
      console.log("TA DANDO ERRO NO REQUEST DOS LIKES");
    }
    
  }, []);

  const GetMyFav = useCallback(async () => {
    try {
      let fav = false;
      fav = myInfos.favorites.some((favorite:any) => {
           return id === favorite.id
        });
      if (fav === true) {
        setRedFav(RepiuRed);
      } else {
        setRedFav(Repiu);
      }
    } catch (error) {
      // console.log("TA DANDO ERRO NO REQUEST DOS MEEEEEEU FAVORITOS");
    }
    
  },[])

  const GetMyLikes = useCallback(async () => {
    try {
      let liked = false;
      liked = likes.some((like) => {
        return like.user.id === myInfos.id;
      });
      if (liked === true) {
        setRedLike(Likered);
      } else {
        setRedLike(Like);
      }
    } catch (error) {
      // console.log("TA DANDO ERRO NO REQUEST DOS MEEEEEEUS LIKES");
      console.log(error);
    }
  }, []);

  const favoritePius = useCallback(async (piu_id: string) => {
    try {
      await api.post(
        "/pius/favorite",
        { piu_id: piu_id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.log("TA DANDO ERRO NO REQUEST DOS LIKES");
    }
  }, []);

  const unfavoritePius = useCallback(async (piu_id: string) => {
    try {
      await api.post(
        "/pius/unfavorite",
        { piu_id: piu_id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.log("TA DANDO ERRO NO REQUEST DOS UNNNNNNNNNLIKES");
    }
  }, []);

  const favunfav = useCallback(() => {
    if (redFav === Repiu) {
      setRedFav(RepiuRed);
      favoritePius(id);
    }
    if (redFav === RepiuRed) {
      unfavoritePius(id);
      setRedFav(Repiu);
    }
  }, []);

  const Follow = useCallback(async (followed_id: string) => {
    try {
      const responseFollow = await api.post("/follow", {
        headers: { Authorization: `Bearer ${token}` },
        data: {
          followed_id,
        },
      });
      console.log(responseFollow);
    } catch (error) {
      console.log("TA DANDO ERRO NO REQUEST DOS FOLLOWWWWS");
    }
  }, []);

  useEffect(() => {
    GetMyLikes();
    GetMyFav();
  }, []);

  return (
    <S.PiusWrapper>
      <S.PrincipalWrapper>
        <S.ImageText>
        <S.PerfilImg source={{uri: user.photo }} />
        <S.FirstName>{user.first_name}</S.FirstName>
        </S.ImageText>
        <S.Arroba>{"@" + user.username}</S.Arroba>
      </S.PrincipalWrapper>
      <S.PiuTextWrapper>
        <S.PiuText>{text}</S.PiuText>
        <S.InterationsWrapper>
          <S.ReplieWrapper>
            <S.ReactIcon source={Replie} resizeMode="contain" />
            <S.ReplieNumber>100</S.ReplieNumber>
          </S.ReplieWrapper>
          <S.RepiuWrapper onPress={() => favunfav()}>
            <S.ReactIcon source={redFav} resizeMode="contain" />
          </S.RepiuWrapper>
          <S.LikeWrapper
            onPress={() => {
              likePius(id);
            }}
          >
            <S.ReactIcon source={redLike} resizeMode="contain" />
            <S.LikeNumber style={{ color: redLike === Likered ? "red" : "black" }}>
              {numLike}
            </S.LikeNumber>
          </S.LikeWrapper>
          <S.Buttons>
          <S.DeletePiu delete={user.username===myUser.username} onPress={() => {deletePiu(id)}}>
            <S.TextDelete>Apagar</S.TextDelete>
          </S.DeletePiu>
          <S.ButtonFollow onPress={() => Follow(id)}><S.TextFollow>Follow</S.TextFollow></S.ButtonFollow>
          </S.Buttons>
        </S.InterationsWrapper>
      </S.PiuTextWrapper>
    </S.PiusWrapper>
  );
};

export default Pius;