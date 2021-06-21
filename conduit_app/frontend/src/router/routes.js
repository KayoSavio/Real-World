import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("../pages/Home"),
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../pages/HomeGlobal")
        },
        {
          path: "my-feed",
          name: "home-my-feed",
          component: () => import("../pages/HomeMyFeed")
        },
        {
          path: "tag/:tag",
          name: "home-tag",
          component: () => import("../pages/HomeTag")
        }
      ]
    },
    {
      name: "login",
      path: "/login",
      component: () => import("../pages/Login")
    },
    {
      name: "register",
      path: "/register",
      component: () => import("../pages/Register")
    },
    {
      name: "settings",
      path: "/settings",
      component: () => import("../pages/Settings")
    },
    {
      path: "/@:username",
      component: () => import("../pages/Profile"),
      children: [
        {
          path: "",
          name: "profile",
          component: () => import("../pages/ProfileArticles")
        },
        {
          name: "profile-favorites",
          path: "favorites",
          component: () => import("../pages/ProfileFavorited")
        }
      ]
    },
    {
      name: "article",
      path: "/articles/:slug",
      component: () => import("../pages/Article"),
      props: true
    },
    {
      name: "article-edit",
      path: "/editor/:slug?",
      props: true,
      component: () => import("../pages/ArticleEdit")
    }
  ]
});
