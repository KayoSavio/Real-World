<template>
  <footer>
    <div class="container">
      <router-link class="logo-font" :to="{ name: 'home', params: {} }">
        conduit
      </router-link>
      <span class="attribution">
        Desenvolvido por
        <router-link
          rel="noopener noreferrer"
          target="blank"
          to="https://www.instagram.com/kayosavio/"
        >
          Kayo Savio</router-link
        >
        Vue.js with axios and vuex
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
