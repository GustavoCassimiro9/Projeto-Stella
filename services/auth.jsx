export const TOKEN_KEY = "@stella-token";
export const USER_KEY = "@stella-user";

// Verifica se o usuario está logado
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

// Verifica se o usuario está logado
export const userType = () =>
  JSON.parse(localStorage.getItem(USER_KEY)).userType;

// Pega o Token do usuario
export const getToken = () => localStorage.getItem(TOKEN_KEY);

// Pega os dados do usuario
export const getUser = () =>
  JSON.parse(localStorage.getItem(USER_KEY));

// Salva os dados iniciais do usuario
export const login = (token, user) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

// Desloga o usuario
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};