import { createArticleService } from "../../../services/ArticleService";
import { createCommentService } from "../../../services/CommentService";
import { SET_ARTICLE, SET_COMMENTS } from "./settings.type";
const articleService = createArticleService();
const commentService = createCommentService();

export const actions = {
  fetchArticle(context, articleSlug) {
    return articleService.get(articleSlug)
      .then(({ data }) => {
        context.commit(SET_ARTICLE, data.article);
      })
      .catch(error => {
        throw new Error(error);
      });
  },
  fetchComments(context, articleSlug) {
    return commentService.get(articleSlug)
      .then(({ data }) => {
        context.commit(SET_COMMENTS, data.comments);
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};
