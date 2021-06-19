import ApiService from "../../services/api/index";

const state = {
  errors: {},
  profile: {}
};

const getters = {
  profile(state) {
    return state.profile;
  }
};

const actions = {
  fetchProfile(context, payload) {
    const { username } = payload;
    return ApiService.get("profiles", username)
      .then(({ data }) => {
        context.commit("setProfile", data.profile);
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
        context.commit("setProfile", data.profile);
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
        context.commit("setProfile", data.profile);
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};

const mutations = {
  setProfile(state, profile) {
    state.profile = profile;
    state.errors = {};
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
