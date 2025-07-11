import { Plugin, App } from "vue-demi";
import MyPluginComponent from "./components/MyPluginComponent";

interface MyPluginOptions {
  globalMessage?: string;
}

const MyUniversalVuePlugin: Plugin = {
  install(app: App, options?: MyPluginOptions) {
    (
      app as App & { config: { globalProperties: any } }
    ).config.globalProperties.$myPlugin = {
      version: "0.1.0",
      message:
        options?.globalMessage || "Bienvenue dans mon plugin universel!",
    };
    (app as App).component("MyPluginComponent", MyPluginComponent);
  }
};
export default MyUniversalVuePlugin;
