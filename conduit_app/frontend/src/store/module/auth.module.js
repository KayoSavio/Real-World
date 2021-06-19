import ApiService from "../../services/api/index";
import jwt from "../../services/jwt.service";

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!jwt.getToken()
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  login(context, credentials) {
    return new Promise(resolve => {
      ApiService.post("users/login", { user: credentials })
        .then(({ data }) => {
          context.commit("setAuth", data.user);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit("setError", response.data.errors);
        });
    });
  },
  logout(context) {
    context.commit("purgeAuth");
  },
  register(context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post("users", { user: credentials })
        .then(({ data }) => {
          context.commit("setAuth", data.user);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit("setError", response.data.errors);
          reject(response);
        });
    });
  },
  checkAuth(context) {
    if (jwt.getToken()) {
      ApiService.setHeader();
      ApiService.get("user")
        .then(({ data }) => {
          context.commit("setAuth", data.user);
        })
        .catch(({ response }) => {
          context.commit("setError", response.data.errors);
        });
    } else {
      context.commit("purgeAuth");
    }
  },
  updateUser(context, payload) {
    const { email, username, password, image, bio } = payload;
    const user = {
      email,
      username,
      bio,
      image
    };
    if (password) {
      user.password = password;
    }

    return ApiService.put("user", user).then(({ data }) => {
      context.commit("setAuth", data.user);
      return data;
    });
  }
};

const mutations = {
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

export default {
  state,
  actions,
  mutations,
  getters
};
