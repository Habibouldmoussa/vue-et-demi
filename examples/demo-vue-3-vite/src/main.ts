import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import MyUniversalVuePlugin from "../libs/admin/index.js";
declare module "../libs/admin" {
  const MyUniversalVuePlugin: any;
  export default MyUniversalVuePlugin;
}
App.use(MyUniversalVuePlugin, {
  globalMessage: "Bienvenue dans mon plugin universel!",
});

createApp(App).mount("#app");
