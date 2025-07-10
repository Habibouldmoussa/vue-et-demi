import { Plugin, Vue2, App, isVue3, isVue2 } from "vue-demi";
import MyPluginComponent from "./components/MyPluginComponent";

interface MyPluginOptions {
  globalMessage?: string;
}

const MyUniversalVuePlugin: Plugin = {
  install(app: typeof Vue2 | App, options?: MyPluginOptions) {
    // Vue 2 installation
    if (isVue2) {
      // Vue 2 API
      (app as typeof Vue2).prototype.$myPlugin = {
        version: "0.1.0",
        message:
          options?.globalMessage || "Bienvenue dans mon plugin universel!",
      };
      (app as typeof Vue2).component("MyPluginComponent", MyPluginComponent);
    } else {
      // Vue 3 API
      (
        app as App & { config: { globalProperties: any } }
      ).config.globalProperties.$myPlugin = {
        version: "0.1.0",
        message:
          options?.globalMessage || "Bienvenue dans mon plugin universel!",
      };
      (app as App).component("MyPluginComponent", MyPluginComponent);
    }
  },
};
export default MyUniversalVuePlugin;
