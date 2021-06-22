
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
   * @description responsavel pelo feed global de artigos
   * @param {'feed' | ''} type - verifica se type é igual a feed ou /feed ou ""
   * todos são maneiras de acessar o feed global do site
   * @param {*} params
   * @returns {object []} lista de artigos
   */
  query(type, params) {
    return providedApi.query(ARTICLES + (type === "feed" ? "/feed" : ""), {
      params
    });
  },
  /**
   * @description Busca um artigo
   * @param {*} slug Parametro passado no ArticleAction/ Slug é o id do artigo definido na req
   */
  get(slug) {
    return providedApi.get(ARTICLES, slug);
  },
  /**
   * @description Cria um artigo
   * @param {*} params parâmetros definidos no article.state
   */
  create(params) {
    return providedApi.post(ARTICLES, { article: params });
  },
  /**
   * @description Atualiza o artigo
   * @param {*} slug Parametro passado no ArticleAction/ Slug é o id do artigo definido no JSON
   * @param {*} params parâmetros definidos no article.state
   */
  update(slug, params) {
    return providedApi.update(ARTICLES, slug, { article: params });
  },
  /**
   * @description Deleta o artigo
   * @param {*} slug Parametro passado no ArticleAction/ Slug é o id do artigo que você quer deletar definido definido na req
   * @param {*} ARTICLES "articles" rota da api
   */
  destroy(slug) {
    return providedApi.delete(`${ARTICLES}/${slug}`);
  }
});
