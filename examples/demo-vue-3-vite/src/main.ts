import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import MyUniversalVuePlugin from "../libs/admin/index.js";

const app = createApp(App);

app.use(MyUniversalVuePlugin, {
  globalMessage: "Bienvenue dans mon plugin universel!",
});
app.mount("#app");
