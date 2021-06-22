import ApiService from "../../../services/api";
import { SET_PROFILE, PROFILE } from "./profile.type";

export const actions = {
  /**
   * @description
   */
  fetchProfile(context, payload) {
    const { username } = payload;
    return ApiService.get(PROFILE, username)
      .then(({ data }) => {
        context.commit(SET_PROFILE, data.profile);
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  /**
   * @description
   * @param {*} context
   * @param {*} payload
   * @returns
   */
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
  /**
   * @description
   * @param {*} context
   * @param {*} payload
   * @returns
   */
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
