import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugin/swiper";
import "./plugin/particles";
import util from "./plugin/util";
import "./plugin/init.scss";
Vue.use(util);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
