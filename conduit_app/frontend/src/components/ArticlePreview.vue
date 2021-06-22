<template>
  <div class="article-preview">
    <ArticleMeta isPreview :article="article" />
    <router-link :to="articleLink" class="preview-link">
      <h1 v-text="article.title" />
      <p v-text="article.description" />
      <span>Read more...</span>
      <TagList :tags="article.tagList" />
    </router-link>
  </div>
</template>

<script>
import ArticleMeta from "./ArticleMeta";
import TagList from "./TagList";

export default {
  name: "ArticlePreview",
  components: {
    ArticleMeta,
    TagList
  },
  props: {
    article: { type: Object, required: true }
  },
  computed: {
    articleLink() {
      return {
        name: "article",
        params: {
          slug: this.article.slug
        }
      };
    }
  }
};
</script>
