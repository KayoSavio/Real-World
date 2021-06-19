import { ArticlesService, CommentsService } from "../../services/index";

const state = {
  article: {},
  comments: []
};

const actions = {
  fetchArticle(context, articleSlug) {
    return ArticlesService.get(articleSlug)
      .then(({ data }) => {
        context.commit("setArticle", data.article);
      })
      .catch(error => {
        throw new Error(error);
      });
  },
  fetchComments(context, articleSlug) {
    return CommentsService.get(articleSlug)
      .then(({ data }) => {
        context.commit("setComments", data.comments);
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

const mutations = {
  setArticle(state, article) {
    state.article = article;
  },
  setComments(state, comments) {
    state.comments = comments;
  }
};

export default {
  state,
  actions,
  mutations
};
