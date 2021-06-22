import jwt from "../../../token/jwt.service";

export const state = {
  errors: null,
  user: {},
  isAuthenticated: !!jwt.getToken()
};
