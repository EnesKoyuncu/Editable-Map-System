import { SendGet, SendPost } from "../utils/request"; // ! Kullanıcı sadece get post'tan yararlanması için herhalde --> sezere sor

// todo Buralar eklenicek herhalde login kısmına ant design ile
export const loginWithEmail = async (email: string, password: string) => {
  return await SendPost("auth/Login", {
    email: email,
    password: password,
  });
};
// todo
export const loginWithGoogle = async () => {
  return await SendGet("auth/google");
};

// todo
export const verifyToken = async (token: string) => {
  return await SendGet("auth/verify", token);
};
