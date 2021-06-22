import jwt from "../../../token/jwt.service";

export const mutations = {
  setError(state, error) {
    state.errors = error;
  },
  setAuth(state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
    jwt.saveToken(state.user.token);
  },
  purgeAuth(state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    jwt.destroyToken();
  }
};
