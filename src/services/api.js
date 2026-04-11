import axios from 'axios';
import { store } from '../redux/store.js';
import { clearUser, setAccessToken } from '../redux/auth/slice.js';

const BASE_URL = 'http://localhost:3000';
// const BASE_URL = 'https://vidreira-register.onrender.com';

const axiosAPI = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosAPI.interceptors.request.use(config => {
  const token = store.getState().auth.accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosAPI.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (originalRequest.url === '/auth/refresh') {
        store.dispatch(clearUser());
        return Promise.reject(error);
      }
      originalRequest._retry = true;

      try {
        const response = await axiosAPI.post('/auth/refresh');
        const newAccessToken = response.data.data.accessToken;

        store.dispatch(setAccessToken(newAccessToken));
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return axiosAPI(originalRequest); // повторюємо оригінальний запит
      } catch {
        store.dispatch(clearUser());
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosAPI;
