import Vue from "vue";
import App from "./App.vue";
import MyUniversalVuePlugin from "../libs/admin";

Vue.config.productionTip = false;
Vue.use(MyUniversalVuePlugin, {
  globalMessage: "Bienvenue dans mon plugin universel!",
});
new Vue({
  render: (h) => h(App),
}).$mount("#app");
