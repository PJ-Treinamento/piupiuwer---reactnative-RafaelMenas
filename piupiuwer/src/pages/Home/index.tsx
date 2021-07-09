import React, { useCallback, useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import api from "../../../service/api";
import Mypiu from "../../components/MyPiu";
import Header from "../../components/PageHeader";
import Pius from "../../components/Pius";
import { useAuth } from "../../hooks/useAuth";
import { IPiu, IUser } from "../../models";
import * as S from "./styles";

function Home() {
  const { token, user, reload } = useAuth();

  const [pius, setPius] = useState<IPiu[]>([]);

  const [userInfos, setUserInfos] = useState<IUser[]>([]);

  const [search, setSearch] = useState("");

  const loadMyInfoUsers = useCallback(async () => {
    const usersInfo = await api.get(`/users?username=${user.username}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUserInfos(usersInfo.data);
  }, []);

  useEffect(() => {
    loadMyInfoUsers();
  }, []);

  useEffect(() => {
    const getPius = async () => {
      const responsePius = await api.get("/pius", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPius(responsePius.data);
    };
    getPius();
  }, [reload]);

  return (
    <S.Feed>
      <Header search={search} setSearch={setSearch} />
      <Mypiu />
      <S.Pius>
        <S.GreyBar>
        </S.GreyBar>
        {pius.map((piu) => {
          if (
            search === "" ||
            piu.user.username.toLowerCase().includes(search.toLowerCase()) ||
            piu.user.last_name.toLowerCase().includes(search.toLowerCase()) ||
            piu.user.first_name.toLowerCase().includes(search.toLowerCase())
          ) {
            return <Pius myInfos={userInfos[0]} key={piu.id} {...piu} />;
          }
        })}
      </S.Pius>
    </S.Feed>
  );
}

export default Home;
