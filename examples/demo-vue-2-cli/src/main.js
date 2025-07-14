import Vue from "vue";
import App from "./App.vue";
import Admin from "../libs/admin";

Vue.config.productionTip = false;
Vue.use(Admin, {
  globalMessage: "Bienvenue dans mon plugin universel!",
});
new Vue({
  render: (h) => h(App),
}).$mount("#app");
