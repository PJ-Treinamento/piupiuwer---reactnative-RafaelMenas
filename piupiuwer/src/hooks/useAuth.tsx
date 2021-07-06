import React, { createContext, useContext, useState } from "react";
import api from "../../service/api";
import { IUser } from "../models";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

interface AuthState {
  user: IUser;
  token: string;
}

interface AuthContextData {
  user: IUser;
  token: string;
  login(cred: LoginCredentials): void;
  logout(): void;
}

interface LoginCredentials {
  email: string;
  password: string;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<AuthState>({} as AuthState);

  useEffect(() => {
    async function getData() {
      const token = await AsyncStorage.getItem("@Project:token");
      const user = await AsyncStorage.getItem("@Project:user");

      if (user && token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        return { user: JSON.parse(user), token };
      }
    }
    getData();
  }, []);

  const login = async ({ email, password }: LoginCredentials) => {
    const response = await api.post("/sessions/login/", {
      email,
      password,
    });

    const { token, user } = response.data;
    AsyncStorage.setItem("@Project:token", token);
    AsyncStorage.setItem("@Project:user", JSON.stringify(user));

    setUserData({ token, user });
  };

  const logout = () => {
    AsyncStorage.removeItem("@Project:user");
    AsyncStorage.removeItem("@Project:token");

    setUserData({} as AuthState);
  };

  return (
    <AuthContext.Provider
      value={{ logout, login, token: userData.token, user: userData.user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  return context;
};
