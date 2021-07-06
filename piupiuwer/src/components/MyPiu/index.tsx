import React, { useState } from "react";
import api from "../../api";

import * as S from "./styles";

import { useAuth } from "../../hooks/useAuth";
import { ITextPiu } from "../../models";

const Mypiu = () => {
  const [textBoolean, setTextBoolean] = useState("");

  const [textPost, setTextPost] = useState("");

  const { token } = useAuth();
  const { user } = useAuth();

  const postPius = async ({ text }: ITextPiu) => {
    await api.post("/pius", {
      headers: { Authorization: `Bearer ${token}` },
      text,
    });
    window.location.reload();
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
    }
  };

  return (
    <S.MyPiuWrapper>
      <S.PrincipalWrapper>
        <img src={user.photo} alt="imagem de perfil" />{" "}
        <S.Question>What are you thinking?</S.Question>
        <S.Arroba>{"@" + user.username}</S.Arroba>
      </S.PrincipalWrapper>
      <S.TextPiuWrapper>
        <textarea
          name="think"
          id="thinking"
          placeholder="How are you?"
          onChange={(e) => setTextPost(e.target.value)}
        ></textarea>
        <p style={{ color: textPost.length > 140 ? "red" : "black" }}>
          {textPost.length}
        </p>
        <button
          onClick={() => {
            correction();
            postPius({ text: textPost });
          }}
        >
          piu
        </button>
        <p style={{ color: "red" }}>{textBoolean}</p>
      </S.TextPiuWrapper>
    </S.MyPiuWrapper>
  );
};

export default Mypiu;
