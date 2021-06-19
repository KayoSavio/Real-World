import { TagsService, ArticlesService } from "../../services/api/index";

const state = {
  tags: [],
  articles: [],
  isLoading: true,
  articlesCount: 0
};

const getters = {
  articlesCount(state) {
    return state.articlesCount;
  },
  articles(state) {
    return state.articles;
  },
  isLoading(state) {
    return state.isLoading;
  },
  tags(state) {
    return state.tags;
  }
};

const actions = {
  fetchArticles({ commit }, params) {
    commit("fetchStart");
    return ArticlesService.query(params.type, params.filters)
      .then(({ data }) => {
        commit("fetchEnd", data);
      })
      .catch(error => {
        throw new Error(error);
      });
  },
  fetchTags({ commit }) {
    return TagsService.get()
      .then(({ data }) => {
        commit("setTags", data.tags);
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  fetchStart(state) {
    state.isLoading = true;
  },
  fetchEnd(state, { articles, articlesCount }) {
    state.articles = articles;
    state.articlesCount = articlesCount;
    state.isLoading = false;
  },
  setTags(state, tags) {
    state.tags = tags;
  },
  updateArticleInList(state, data) {
    state.articles = state.articles.map(article => {
      if (article.slug !== data.slug) {
        return article;
      }
      // We could just return data, but it seems dangerous to
      // mix the results of different api calls, so we
      // protect ourselves by copying the information.
      article.favorited = data.favorited;
      article.favoritesCount = data.favoritesCount;
      return article;
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
