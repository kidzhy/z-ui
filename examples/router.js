import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/button",
      name: "button",
      component: () => import("./docs/button.md")
    },
    {
      path: "/datepicker",
      name: "datepicker",
      component: () => import("./docs/datepicker.md")
    }
  ]
});
