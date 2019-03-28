import i18n from "./locales/index";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugin/plugin";
import "./plugin/init.scss";
// import util from "./plugin/util";
// Vue.use(util);
Vue.config.productionTip = false;
Vue.prototype.print = window.console.log;
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
