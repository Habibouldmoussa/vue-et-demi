import { App, Plugin } from "vue-demi";
import HelloWorld from "./views/HelloWorld.vue";

interface MyPluginOptions {
  globalMessage?: string;
}
const MyUniversalVuePlugin: Plugin = {
  install(app: App, options?: MyPluginOptions) {
    app.component("HelloWorld", HelloWorld);
    app.config.globalProperties.$myPlugin = {
      version: "0.1.0",
      message: options?.globalMessage || "Bienvenue dans mon plugin universel!",
    };
    console.log("MyUniversalVuePlugin a été installé !", options);
  },
};
export default MyUniversalVuePlugin;
