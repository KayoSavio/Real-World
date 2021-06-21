import api from "../api";
import { COMMENTS, ARTICLES } from "../api/resources";

export const createCommentService = (providedApi = api) => ({
  get(slug) {
    if (typeof slug !== "string") {
      throw new Error(
        "CommentsService.get() article slug required to fetch comments"
      );
    }
    return providedApi.get(ARTICLES, `${slug}/${COMMENTS}`);
  },

  post(slug, payload) {
    return providedApi.post(`${ARTICLES}/${slug}/${COMMENTS}`, {
      comment: { body: payload }
    });
  },

  destroy(slug, commentId) {
    return providedApi.delete(`${ARTICLES}/${slug}/${COMMENTS}/${commentId}`);
  }
});
