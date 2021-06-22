import api from "../api";
import { TAGS } from "../api/resources";

export const createTagService = (providedApi = api) => ({
  /**
   * @description Busca as tags
   * @returns {object []} lista de tags
   */
  get() {
    return providedApi.get(TAGS);
  }
});
