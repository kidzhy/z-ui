import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import zjsUI from "../packages";
import demoBlock from "./components/demo-block.vue";
import "../packages/theme/index.less";

Vue.use(zjsUI);
Vue.component("demo-block", demoBlock);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
