export const mutations = {
  fetchStart(state) {
    state.isLoading = true;
  },
  fetchEnd(state, { articles, articlesCount }) {
    state.articles = articles;
    state.articlesCount = articlesCount;
    state.isLoading = false;
  },
  setTags(state, tags) {
    state.tags = tags;
  },
  updateArticleInList(state, data) {
    state.articles = state.articles.map(article => {
      if (article.slug !== data.slug) {
        return article;
      }
      article.favorited = data.favorited;
      article.favoritesCount = data.favoritesCount;
      return article;
    });
  }
};
