<template>
  <div class="home">
    <ArticleList type="all" />
  </div>
</template>

<script>
import ArticleList from "@/components/ArticleList";

export default {
  name: "home",
  components: {
    ArticleList
  }
};
</script>
