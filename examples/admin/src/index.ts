import { Plugin, Vue2, App, isVue3 } from "vue-demi";
import MyPluginComponent from "./components/MyPluginComponent";

interface MyPluginOptions {
  globalMessage?: string;
}

const MyUniversalVuePlugin: Plugin = {
  install(app: typeof Vue2 | App, options?: MyPluginOptions) {
    if (isVue3) {
      // Vue 3 API
      (
        app as App & { config: { globalProperties: any } }
      ).config.globalProperties.$myPlugin = {
        version: "0.1.0",
        message:
          options?.globalMessage || "Bienvenue dans mon plugin universel!",
      };
      (app as App).component("MyPluginComponent", MyPluginComponent);
    } else {
      // Vue 2 API
      (app as typeof Vue2).prototype.$myPlugin = {
        version: "0.1.0",
        message:
          options?.globalMessage || "Bienvenue dans mon plugin universel!",
      };
      (app as typeof Vue2).component("MyPluginComponent", MyPluginComponent);
    }
  },
};
export default MyUniversalVuePlugin;
