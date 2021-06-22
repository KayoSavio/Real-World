import { createTagService } from "../../../services/TagService";
import { createArticleService } from "../../../services/ArticleService";
import { FETCH_START, FETCH_END, SET_TAGS } from "./home.type";

const articleService = createArticleService();
const tagService = createTagService();

export const actions = {
  /**
   * @description ele mostra para o usuário que está "carregando" até retornar os
   * artigos globais da api, usado em articleList
   * @param {*} param
   * @returns
   */
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
  /**
   * @description ele faz uma requisição tipo get para api retornando as tags que são
   * usadas nos artigos
   * @param {*} param0
   * @returns
   */
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
