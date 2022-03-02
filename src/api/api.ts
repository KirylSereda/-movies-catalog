import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const BASE_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8";

let requestConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  params: {
    s:'',
    page: 1
  },
};

const axiosInstance: AxiosInstance = axios.create(requestConfig);

export default axiosInstance;
