import { post } from "./base";

export const login = ({ username, password }) =>
  post(`api/v1/oauth/token`, {
    username: username,
    password: password,
    clientId: "4EhSElpPqiPO60tgB2-yuI-Rr9t2lhEgIo0hz7AR41Q",
    grantType: "password",
  });

export const refreshToken = (refreshToken) =>
  post(`api/v1/oauth/token`, {
    refreshToken,
    clientId: "4EhSElpPqiPO60tgB2-yuI-Rr9t2lhEgIo0hz7AR41Q",
    grantType: "refresh_token",
  });
