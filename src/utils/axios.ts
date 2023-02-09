import axios, { AxiosError, AxiosResponse } from "axios";

const axiosServices = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "content-type": "application/x-www-form-urlencoded" },
});

const alertRequestErrorByMessage = (message: string) => {
  if (message) {
    alert(message);
  }
};

axiosServices.interceptors.response.use(
  (response) => {
    if (response.status !== 200) {
      alertRequestErrorByMessage(
        response?.data?.message || response?.data?.desc
      );
      return Promise.reject(response);
    }
    return response;
  },
  (error) => {
    if (
      error.response &&
      error.response.status === 401 &&
      window.location.pathname !== "/login"
    ) {
      localStorage.removeItem("authToken");
      delete axiosServices.defaults.headers.common.Authorization;
      setTimeout(() => {
        window.location.href = "/login";
      }, 500);
    }

    alertRequestErrorByMessage(
      error?.response?.data?.message || error?.response?.data?.desc
    );

    return Promise.reject(
      (error.response && error.response.data) || "Wrong Services"
    );
  }
);

export default axiosServices;
