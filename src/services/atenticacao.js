export const CHAVE_TOKEN = "@stella-token";
export const CHAVE_USUARIO = "@stella-usuario";

// Verifica se o usuario está logado
export const estaAutenticado = () => localStorage.getItem(CHAVE_TOKEN) !== null;

// Verifica se o usuario está logado
export const tipoUsuario = () =>
  JSON.parse(localStorage.getItem(CHAVE_USUARIO)).tipo;

export const primeiroAcesso = () =>
  JSON.parse(localStorage.getItem(CHAVE_USUARIO)).primeiro_acesso;
// Pega o Token do usuario
export const pegarToken = () => localStorage.getItem(CHAVE_TOKEN);

// Pega os dados do usuario
export const pegarUsuario = () =>
  JSON.parse(localStorage.getItem(CHAVE_USUARIO));

// Salva os dados iniciais do usuario
export const logar = (token, usuario) => {
  localStorage.setItem(CHAVE_TOKEN, token);
  localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuario));
};

// Desloga o usuario
export const deslogar = () => {
  localStorage.removeItem(CHAVE_TOKEN);
  localStorage.removeItem(CHAVE_USUARIO);
  //   localStorage.removeItem(CHAVE_FILTROS);
};
