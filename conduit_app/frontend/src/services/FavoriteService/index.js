import api from "../api";
import { FAVORITE, ARTICLES } from "../api/resources";

export const createFavoriteService = (providedApi = api) => ({
  /**
   * @description Favorita um artigo
   * @param {*} slug Id do artigo selecionado
   */
  add(slug) {
    return providedApi.post(`${ARTICLES}/${slug}/${FAVORITE}`);
  },
  /**
   * @description Desfavorita um artigo
   * @param {*} slug Id do artigo selecionado
   */
  remove(slug) {
    return providedApi.delete(`${ARTICLES}/${slug}/${FAVORITE}`);
  }
});
