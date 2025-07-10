import Vue from "vue";
import CounterPlugin from "../../dist/index.js";
import App from "./App.vue";

// Installation du plugin counter
Vue.use(CounterPlugin, {
  defaultStep: 1,
  maxCount: 100,
  minCount: 0,
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
