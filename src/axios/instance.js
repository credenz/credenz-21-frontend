import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://api.github.com/users/",
});

export const setAuthorizationToken = (token) => {
  AxiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
};

export const removeAuthorizationToken = () => {
  delete AxiosInstance.defaults.headers.Authorization;
};

export default AxiosInstance;
