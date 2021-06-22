import api from "../api";
import { COMMENTS, ARTICLES } from "../api/resources";

export const createCommentService = (providedApi = api) => ({
  /**
   * @description Busca no artigo os comentários existentes
   * @param {*} slug Defindo no res do artigo. "id do artigo" usada para acessar a pag do artigo
   * @return {object []} Comentário
   */
  get(slug) {
    if (typeof slug !== "string") {
      throw new Error(
        "CommentsService.get() article slug required to fetch comments"
      );
    }
    return providedApi.get(ARTICLES, `${slug}/${COMMENTS}`);
  },
  /**
   * @description Cria um comentário
   * @param {*} slug Definido na res do artigo "id do artigo"
   * @param {*} payload Comentário
   */
  post(slug, payload) {
    return providedApi.post(`${ARTICLES}/${slug}/${COMMENTS}`, {
      comment: { body: payload }
    });
  },
  /**
   * @description Deleta um comentário
   * @param {*} slug  Definido na res do artigo "id do artigo"
   * @param {*} commentId Id do comentário para ser excluido
   */
  destroy(slug, commentId) {
    return providedApi.delete(`${ARTICLES}/${slug}/${COMMENTS}/${commentId}`);
  }
});
