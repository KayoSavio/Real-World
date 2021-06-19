<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import './styles/global.css';
import Header from "./components/TheHeader";
import Footer from "./components/TheFooter";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

