import axios from "axios";

const token = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASEL_URL,
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
