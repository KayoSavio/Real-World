
import api from "../api/index";
import { ARTICLES } from "../api/resources";

/**
 * @description factory function to create an article service using dependency injection
 * @param {*} [providedApi] - Api que fornece os métodos para comunicação com o servidor
 * @example const articleService = createArticleService(apiImplementation)
 * @returns objeto com métodos Rest de C.R.U.D para o recurso de artigos
 */

export const createArticleService = (providedApi = api) => ({
  /**
   * @description retorna uma lista de artigos
   * @param {'feed' | ''} type - indica se são artigos do feed do usuario ou globais
   * @param {*} params
   * @returns {object []} lista de artigos
   */
  query(type, params) {
    return providedApi.query(ARTICLES + (type === "feed" ? "/feed" : ""), {
      params
    });
  },
  /**
   *
   * @param {*} slug
   * @returns
   */
  get(slug) {
    return providedApi.get(ARTICLES, slug);
  },
  create(params) {
    return providedApi.post(ARTICLES, { article: params });
  },
  update(slug, params) {
    return providedApi.update(ARTICLES, slug, { article: params });
  },
  destroy(slug) {
    return providedApi.delete(`${ARTICLES}/${slug}`);
  }
});
