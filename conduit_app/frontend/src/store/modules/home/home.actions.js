import { createTagService } from "../../../services/TagService";
import { createArticleService } from "../../../services/ArticleService";
import { FETCH_START, FETCH_END, SET_TAGS } from "./home.type";

const articleService = createArticleService();
const tagService = createTagService();

export const actions = {
  fetchArticles({ commit }, params) {
    commit(FETCH_START);
    return articleService.query(params.type, params.filters)
      .then(({ data }) => {
        commit(FETCH_END, data);
      })
      .catch(error => {
        throw new Error(error);
      });
  },
  fetchTags({ commit }) {
    return tagService.get()
      .then(({ data }) => {
        commit(SET_TAGS, data.tags);
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};
