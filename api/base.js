import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { camelizeKeys, decamelizeKeys } from "humps";

export const BASE_URL = "https://ffcl-api-dev.osc-fr1.scalingo.io";

const api = axios.create({
  baseURL: BASE_URL,
});

const formatConfig = ({ params, ...opts } = {}) => ({
  ...opts,
  params: decamelizeKeys(params),
});

const isFormData = (val) =>
  typeof FormData !== "undefined" && val instanceof FormData;

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");

  if (Boolean(token?.accessToken)) {
    config.headers["Authorization"] = `Bearer ${token?.accessToken}`;
  }
  config.headers["Accept"] = "application/json";

  if (!isFormData(config.data)) {
    config.data = decamelizeKeys(config.data);
  }

  return config;
});

const formatResponse = (response) => {
  if (!Boolean(response)) {
    return response;
  }
  return camelizeKeys(response);
};

export const get = (uri, config = {}) =>
  api.get(uri, formatConfig(config)).then(formatResponse);

export const post = (uri, payload = {}, config) =>
  api
    .post(uri, decamelizeKeys(payload), formatConfig(config))
    .then(formatResponse);
