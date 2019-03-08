<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view />
  </div>
</template>
<script>
import TopNav from "./components/TopNav.vue";

export default {
  name: "app",
  components: {
    TopNav
  }
};
</script>

<style lang="scss">
#app {
  position: relative;
}
</style>
