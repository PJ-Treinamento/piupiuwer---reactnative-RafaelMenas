import React, { useState } from "react";
import api from "../../../service/api";

import * as S from "./styles";

import { useAuth } from "../../hooks/useAuth";
import { ITextPiu } from "../../models";
import { useEffect } from "react";

const Mypiu = () => {

  const {setReload, reload} = useAuth();

  const [textBoolean, setTextBoolean] = useState("");

  const [textPost, setTextPost] = useState("");

  const { token } = useAuth();
  const { user } = useAuth();

  const postPius = async ({ text }: ITextPiu) => {
    await api.post("/pius", {
      headers: { Authorization: `Bearer ${token}` },
      text,
    });
    setReload(!reload);
  };

  const correction = () => {
    if (textPost.length > 140) {
      setTextBoolean(
        "Your ideas can be a little confusing, try to make them simpler (pius are 140 characters max)"
      );
    }
    if (textPost.length === 0) {
      setTextBoolean(
        "Write a little more about your ideas (pius are 1 character minimum)"
      );
    }
    if (textPost.length < 140 && textPost.length > 0) {
      setTextBoolean("");
      postPius({ text: textPost }); 
    }
  };

  return (
    <S.MyPiuWrapper>
      <S.PrincipalWrapper>
        <S.ImageQuestion>
          <S.PerfilImg source={{ uri: `${user.photo}` }} />
          <S.Question>What are you thinking?</S.Question>
        </S.ImageQuestion>
        <S.Arroba>{"@" + `${user.username}`}</S.Arroba>
      </S.PrincipalWrapper>
      <S.TextPiuWrapper>
        <S.InputPiu
          multiline={true}
          placeholder="How are you?"
          onChangeText={(text) => setTextPost(text)}
          value={textPost}
        />
        <S.CorrecText
          style={{ color: textPost.length > 140 ? "red" : "black" }}
        >
          {textPost.length}
        </S.CorrecText>
        <S.ButtonPost
          onPress={() => {
            correction();
            
          }}
        >
          <S.TextButtonPost>piu</S.TextButtonPost>
        </S.ButtonPost>
        <S.CorrectText style={{ color: "red" }}>{textBoolean}</S.CorrectText>
      </S.TextPiuWrapper>
    </S.MyPiuWrapper>
  );
};

export default Mypiu;
