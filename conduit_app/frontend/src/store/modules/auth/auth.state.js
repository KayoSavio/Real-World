import jwt from "../../../services/jwt.service";

export const state = {
  errors: null,
  user: {},
  isAuthenticated: !!jwt.getToken()
};
