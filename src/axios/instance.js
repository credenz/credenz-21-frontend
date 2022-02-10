import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://20.36.41.82/api",
});

export const setAuthorizationToken = (token) => {
  AxiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
};

export const removeAuthorizationToken = () => {
  delete AxiosInstance.defaults.headers.Authorization;
};

export default AxiosInstance;
