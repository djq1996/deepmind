import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import util from "./plugin/util";
import "./plugin/plugin";
import "./plugin/init.scss";
// Vue.use(util);
Vue.config.productionTip = false;
Vue.prototype.print = window.console.log;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
