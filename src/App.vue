<template>
  <div id="app" :class="homepage">
    <top-nav @onHover="onHover"></top-nav>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
    <bottom-footer></bottom-footer>
    <div class="nav-mask"></div>
  </div>
</template>
<script>
import TopNav from "./components/TopNav.vue";
import BottomFooter from "./components/BottomFooter.vue";

export default {
  name: "app",
  data: function() {
    return {
      transitionName: "slide-left",
      homepage: ""
    };
  },
  mounted: function() {},
  methods: {
    onHover(val) {
      this.homepage = val ? val : "";
    }
  },
  components: {
    TopNav,
    BottomFooter
  }
};
</script>

<style lang="scss">
#app {
  position: relative;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(15px);
  opacity: 0;
}
</style>
