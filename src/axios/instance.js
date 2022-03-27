import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://backend.credenz.in/api/",
});

export const setAuthorizationToken = (token) => {
  AxiosInstance.defaults.headers.Authorization = `JWT ${token}`;
};

export const removeAuthorizationToken = () => {
  delete AxiosInstance.defaults.headers.Authorization;
};

export default AxiosInstance;
