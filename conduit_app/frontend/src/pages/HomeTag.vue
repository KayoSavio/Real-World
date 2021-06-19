<template>
  <div class="home-tag"><ArticleList :tag="tag"></ArticleList></div>
</template>

<script>
import ArticleList from "@/components/ArticleList";

export default {
  name: "home-tag",
  components: {
    ArticleList
  },
  computed: {
    tag() {
      return this.$route.params.tag;
    }
  }
};
</script>
