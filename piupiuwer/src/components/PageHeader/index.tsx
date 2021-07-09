import React from "react";

import * as S from "./styles";

import Pena from '../../assets/Feed/Pena.png'
import { useAuth } from "../../hooks/useAuth";
export interface Search {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
}

const Header: React.FC<Search> = ({ setSearch, search }) => {
  const {logout} = useAuth();
  
  return (
    <S.HeaderWrapper>
      <S.LogOutInput onPress={logout} >
        <S.LogOutText>LogOut</S.LogOutText>
      </S.LogOutInput>
      <S.InputSearch
        placeholder="Search your piu..."
        onChangeText={(text) => setSearch(text)}
        value={search}
      />
      <S.Logo source={Pena} resizeMode="contain" />
    </S.HeaderWrapper>
  );
};

export default Header;
