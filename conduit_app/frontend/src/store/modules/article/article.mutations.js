import Vue from "vue";
import { state, initialState } from "./article.state";

export const mutations = {
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
