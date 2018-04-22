// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import Vue2Filters from "vue2-filters";
import VTooltip from "v-tooltip";

import App from "./App";
import SortingMenu from "./components/shared/SortingMenu";
import ProfileMenu from "./components/shared/ProfileMenu";
import Footer from "./components/shared/Footer";
import PeriodicTable from "./components/PeriodicTable";
import ElementProfile from "./components/ElementProfile";

import pt from "periodic-table";

window.$ = window.jQuery = require("jquery");

require("./assets/css/grids.css");
require("./assets/css/grids-responsive.css");
require("./assets/css/luxbar.css");
require("./assets/css/periodic-table.css");
require("./../node_modules/atomic-bohr-model/dist/atomicBohrModel.min.js");

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vue2Filters);
Vue.use(VTooltip);

const router = new VueRouter({
  mode: "history",
  base: "/mendeleev",
  routes: [
    {
      path: "/",
      components: {
        nav: SortingMenu,
        default: PeriodicTable,
        footer: Footer
      }
    },
    {
      path: "/element/:id",
      components: {
        nav: ProfileMenu,
        default: ElementProfile,
        footer: Footer
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  template: `<App/>`,
  components: { App }
}).$mount("#app");
