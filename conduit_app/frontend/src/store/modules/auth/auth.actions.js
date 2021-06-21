import api from "../../../services/api";
import jwt from "../../../services/jwt.service";
import { SET_AUTH, SET_ERROR, PURGE_AUTH } from "./auth.type";

export const actions = {
  login(context, credentials) {
    return new Promise(resolve => {
      api.post("users/login", { user: credentials })
        .then(({ data }) => {
          context.commit(SET_AUTH, data.user);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
  logout(context) {
    context.commit(PURGE_AUTH);
  },
  register(context, credentials) {
    return new Promise((resolve, reject) => {
      api.post("users", { user: credentials })
        .then(({ data }) => {
          context.commit(SET_AUTH, data.user);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
          reject(response);
        });
    });
  },
  checkAuth(context) {
    if (jwt.getToken()) {
      api.setHeader();
      api.get("user")
        .then(({ data }) => {
          context.commit(SET_AUTH, data.user);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    } else {
      context.commit(PURGE_AUTH);
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

    return api.put("user", user).then(({ data }) => {
      context.commit(SET_AUTH, data.user);
      return data;
    });
  }
};
