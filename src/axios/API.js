import AxiosInstance, { setAuthorizationToken } from "./instance";

export const API = {};

API.getUserDetails = async (username) => {
  return AxiosInstance.get(`account_list/${username}`);
};

API.getUserById = async (id) => {
  return AxiosInstance.get(`account/${id}`);
};

API.payment = async (username) => {
  return AxiosInstance.post(`payment/`, username);
};

API.verifyPayment = async (data) => {
  return AxiosInstance.post(`verify_payment/`, data);
};

API.getallAccounts = async () => {
  return AxiosInstance.get(`account/`);
};

API.registerUser = async (data) => {
  return AxiosInstance.post("account/", data);
};

API.getRefreshToken = async (data) => {
  return AxiosInstance.post(`get_access_token/`, data);
};

API.passwordReset = async (data) => {
  return AxiosInstance.post(`password_reset/`, data);
};

API.passwordResetConfirm = async (data) => {
  return AxiosInstance.post(`password_reset/confirm/`, data);
};

API.getProfile = async (token) => {
  setAuthorizationToken(localStorage.getItem("credenz_access_token"));
  return AxiosInstance.get(`profile/`);
};
