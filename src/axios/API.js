import AxiosInstance from "./instance";

export const API = {};

API.getUserDetails = async (id) => {
  AxiosInstance.get(`account/${id}/`);
};

API.getallAccounts = async () => {
  AxiosInstance.get(`account/`);
};

API.registerUser = async (data) => {
  AxiosInstance.post("account/", data);
};

API.getRefreshToken = async (data) => {
  AxiosInstance.post("get_access_token/", data);
};

API.passwordReset = async (data) => {
  AxiosInstance.post(`password_rest/`, data);
};

API.passwordResetConfirm = async (data) => {
  AxiosInstance.post(`password_rest/confirm/`, data);
};

API.passwordValidateToken = async (data) => {
  AxiosInstance.post(`password_rest/valiate_token/`, data);
};
