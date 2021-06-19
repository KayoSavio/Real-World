<template>
  <div class="profile-page">
    <ArticleList :author="author" :items-per-page="5"></ArticleList>
  </div>
</template>

<script>
import ArticleList from "@/components/ArticleList";

export default {
  name: "profile-articles",
  components: {
    ArticleList
  },
  computed: {
    author() {
      return this.$route.params.username;
    }
  }
};
</script>
