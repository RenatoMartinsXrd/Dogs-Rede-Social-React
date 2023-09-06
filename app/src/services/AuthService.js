import { tokenPost, userGet } from './api';

export const AuthService = (userContext) => {
  const { setLogin, setData } = userContext;

  async function userLogin({ email, password }) {
    const { token } = await tokenPost({
      username: email,
      password: password,
    });

    window.localStorage.setItem('token', token);
    const user = await userGet(token);

    setLogin(true);
    setData(user);
  }

  return {
    userLogin,
  };
};
