import Vue from "vue";
import Vuex from "vuex";

import article from "./modules/article/article.module";
import auth from "./modules/auth/auth.module";
import home from "./modules/home/home.module";
import profile from "./modules/profile/profile.module";
import settings from "./modules/settings/settings.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    auth,
    article,
    profile,
    settings,
  }
});
