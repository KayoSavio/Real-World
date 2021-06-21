import ApiService from "../../../services/api";
import { SET_PROFILE } from "./profile.type";

export const actions = {
  fetchProfile(context, payload) {
    const { username } = payload;
    return ApiService.get("profiles", username)
      .then(({ data }) => {
        context.commit(SET_PROFILE, data.profile);
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  profileFollow(context, payload) {
    const { username } = payload;
    return ApiService.post(`profiles/${username}/follow`)
      .then(({ data }) => {
        context.commit(SET_PROFILE, data.profile);
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  profileUnfollow(context, payload) {
    const { username } = payload;
    return ApiService.delete(`profiles/${username}/follow`)
      .then(({ data }) => {
        context.commit(SET_PROFILE, data.profile);
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
