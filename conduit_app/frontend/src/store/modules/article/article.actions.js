import { createArticleService } from "../../../services/ArticleService";
import { createCommentService } from "../../../services/CommentService";
import { createFavoriteService } from "../../../services/FavoriteService";
import { SET_ARTICLE,
         SET_COMMENTS,
         FETCH_COMMENTS,
         UPDATE_ARTICLE_IN_LIST,
         TAG_ADD,
         TAG_REMOVE,
         RESET_STATE,
         }
         from "./article.type";

const ArticleService = createArticleService();
const CommentService = createCommentService();
const FavoriteService = createFavoriteService();

export const actions = {
  async fetchArticle(context, articleSlug, prevArticle) {
    if (prevArticle) {
      return context.commit(SET_ARTICLE, prevArticle);
    }
    const { data } = await ArticleService.get(articleSlug);
    context.commit(SET_ARTICLE, data.article);
    return data;
  },
  async fetchComments(context, articleSlug) {
    const { data } = await CommentService.get(articleSlug);
    context.commit(SET_COMMENTS, data.comments);
    return data.comments;
  },
  async commentCreate(context, payload) {
    await CommentService.post(payload.slug, payload.comment);
    context.dispatch(FETCH_COMMENTS, payload.slug);
  },
  async commentDestroy(context, payload) {
    await CommentService.destroy(payload.slug, payload.commentId);
    context.dispatch(FETCH_COMMENTS, payload.slug);
  },
  async favoriteAdd(context, slug) {
    const { data } = await FavoriteService.add(slug);
    context.commit(UPDATE_ARTICLE_IN_LIST, data.article, { root: true });
    context.commit(SET_ARTICLE, data.article);
  },
  async favoriteRemove(context, slug) {
    const { data } = await FavoriteService.remove(slug);
    context.commit(UPDATE_ARTICLE_IN_LIST, data.article, { root: true });
    context.commit(SET_ARTICLE, data.article);
  },
  articlePublish({ state }) {
    return ArticleService.create(state.article);
  },
  articleDelete(context, slug) {
    return ArticleService.destroy(slug);
  },
  articleEdit({ state }) {
    return ArticleService.update(state.article.slug, state.article);
  },
  articleEditAddTag(context, tag) {
    context.commit(TAG_ADD, tag);
  },
  articleEditRemoveTag(context, tag) {
    context.commit(TAG_REMOVE, tag);
  },
  resetArticleState({ commit }) {
    commit(RESET_STATE);
  }
};
