import api from "../api";
import { TAGS } from "../api/resources";

export const createTagService = (providedApi = api) => ({
  get() {
    return providedApi.get(TAGS);
  }
});
