import Vue from "vue";
import {
  ArticlesService,
  CommentsService,
  FavoriteService
} from "../../services/api/index";

const initialState = {
  article: {
    author: {},
    title: "",
    description: "",
    body: "",
    tagList: []
  },
  comments: []
};

const state = { ...initialState };

const actions = {
  async fetchArticle(context, articleSlug, prevArticle) {
    if (prevArticle !== undefined) {
      return context.commit("setArticle", prevArticle);
    }
    const { data } = await ArticlesService.get(articleSlug);
    context.commit("setArticle", data.article);
    return data;
  },
  async fetchComments(context, articleSlug) {
    const { data } = await CommentsService.get(articleSlug);
    context.commit("setComments", data.comments);
    return data.comments;
  },
  async commentCreate(context, payload) {
    await CommentsService.post(payload.slug, payload.comment);
    context.dispatch("fetchComments", payload.slug);
  },
  async commentDestroy(context, payload) {
    await CommentsService.destroy(payload.slug, payload.commentId);
    context.dispatch("fetchComments", payload.slug);
  },
  async favoriteAdd(context, slug) {
    const { data } = await FavoriteService.add(slug);
    context.commit("updateArticleInList", data.article, { root: true });
    context.commit("setArticle", data.article);
  },
  async favoriteRemove(context, slug) {
    const { data } = await FavoriteService.remove(slug);
    context.commit("updateArticleInList", data.article, { root: true });
    context.commit("setArticle", data.article);
  },
  articlePublish({ state }) {
    return ArticlesService.create(state.article);
  },
  articleDelete(context, slug) {
    return ArticlesService.destroy(slug);
  },
  articleEdit({ state }) {
    return ArticlesService.update(state.article.slug, state.article);
  },
  articleEditAddTag(context, tag) {
    context.commit("tagAdd", tag);
  },
  articleEditRemoveTag(context, tag) {
    context.commit("tagRemove", tag);
  },
  resetArticleState({ commit }) {
    commit("resetState");
  }
};

const mutations = {
  setArticle(state, article) {
    state.article = article;
  },
  setComments(state, comments) {
    state.comments = comments;
  },
  tagAdd(state, tag) {
    state.article.tagList = state.article.tagList.concat([tag]);
  },
  tagRemove(state, tag) {
    state.article.tagList = state.article.tagList.filter(t => t !== tag);
  },
  resetState() {
    for (let f in state) {
      Vue.set(state, f, initialState[f]);
    }
  }
};

const getters = {
  article(state) {
    return state.article;
  },
  comments(state) {
    return state.comments;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
