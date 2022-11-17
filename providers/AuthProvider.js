import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState("loading");
  const [refreshToken, setRefreshToken] = useState();

  useEffect(() => {
    getToken();
  }, []);

  const setToken = async (token) => {
    setAccessToken(token?.accessToken);
    setRefreshToken(token?.refreshToken);
    await AsyncStorage.setItem("token", JSON.stringify(token));
  };
  const getToken = async () => {
    const token = JSON.parse(await AsyncStorage.getItem("token"));
    setAccessToken(token?.accessToken);
    setRefreshToken(token?.refreshToken);
  };
  const deleteToken = async () => {
    setAccessToken(null);
    setRefreshToken(null);
    await AsyncStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ accessToken, refreshToken, setToken, deleteToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
