import { Plugin, Vue2, App, isVue3 } from "vue-demi";
import MyPluginComponent from "./components/MyPluginComponent";

interface MyPluginOptions {
  globalMessage?: string;
}

const MyUniversalVuePlugin: Plugin = {
  install(app: typeof Vue2, options?: MyPluginOptions) {
    app.prototype.$myPlugin = {
      version: "0.1.0",
      message: options?.globalMessage || "Bienvenue dans mon plugin universel!",
    };
    app.component("MyPluginComponent", MyPluginComponent);
  },
};
export default MyUniversalVuePlugin;
