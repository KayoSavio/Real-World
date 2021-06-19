import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import jwt from "../jwt.service";

const api = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = "https://conduit.productionready.io/api";
  },

  setHeader() {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Token ${jwt.getToken()}`;
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`api ${error}`);
    });
  },

  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`api ${error}`);
    });
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`api ${error}`);
    });
  }
};

export default api;

export const TagsService = {
  get() {
    return api.get("tags");
  }
};

export const ArticlesService = {
  query(type, params) {
    return api.query("articles" + (type === "feed" ? "/feed" : ""), {
      params: params
    });
  },
  get(slug) {
    return api.get("articles", slug);
  },
  create(params) {
    return api.post("articles", { article: params });
  },
  update(slug, params) {
    return api.update("articles", slug, { article: params });
  },
  destroy(slug) {
    return api.delete(`articles/${slug}`);
  }
};

export const CommentsService = {
  get(slug) {
    if (typeof slug !== "string") {
      throw new Error(
        "CommentsService.get() article slug required to fetch comments"
      );
    }
    return api.get("articles", `${slug}/comments`);
  },

  post(slug, payload) {
    return api.post(`articles/${slug}/comments`, {
      comment: { body: payload }
    });
  },

  destroy(slug, commentId) {
    return api.delete(`articles/${slug}/comments/${commentId}`);
  }
};

export const FavoriteService = {
  add(slug) {
    return api.post(`articles/${slug}/favorite`);
  },
  remove(slug) {
    return api.delete(`articles/${slug}/favorite`);
  }
};
