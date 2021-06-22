<template>
  <div class="tag">
    <ArticleList type="tag" :tag="tag"/>
  </div>
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
