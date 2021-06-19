import Vue from "vue";
import Vuex from "vuex";

import home from "./module/home.module";
import auth from "./module/auth.module";
import article from "./module/article.module";
import profile from "./module/profile.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    auth,
    article,
    profile
  }
});
