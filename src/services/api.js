import axios from 'axios';
import { pegarToken } from "./autenticacao";

const api = axios.create({
  baseURL: process.env.REACT_APP_AMBIENT == 'dev' ? "http://localhost/api-trilhas" : "http://localhost/api-trilhas"
});

// interceptor de autenticação
api.interceptors.request.use(async (config) => {
  const token = await pegarToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
