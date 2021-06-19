import Vue from 'vue'
import App from '@/App.vue'
import router from "@/router/routes"
import store from "@/store/index"

import ApiService from "@/services/api/index";
import DateFilter from "@/services/date.filter";
import ErrorFilter from "@/services/error.filter";

ApiService.init();

router.beforeEach((to, from, next) =>
  Promise.all([store.dispatch("checkAuth")]).then(next)
);

Vue.config.productionTip = false;
Vue.filter("date", DateFilter);
Vue.filter("error", ErrorFilter);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
