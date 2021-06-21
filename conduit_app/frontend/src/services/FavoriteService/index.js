import api from "../api";
import { FAVORITE, ARTICLES } from "../api/resources";

export const createFavoriteService = (providedApi = api) => ({
  add(slug) {
    return providedApi.post(`${ARTICLES}/${slug}/${FAVORITE}`);
  },
  remove(slug) {
    return providedApi.delete(`${ARTICLES}/${slug}/${FAVORITE}`);
  }
});
