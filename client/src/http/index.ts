import axios from 'axios';

const API_URL = 'http://localhost:8080';

const $axios = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$axios.interceptors.request.use((config) => {
  if (!config.headers) {
    throw new Error();
  }

  config.headers.Authorization = `Bearer ${localStorage.getItem(
    'accessToken'
  )}`;

  return config;
});

$axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export { $axios };
