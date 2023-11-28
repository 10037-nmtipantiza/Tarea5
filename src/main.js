// main.js

import Vue from "vue";
import App from "./Container.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
