import { Plugin, Vue2 } from "vue-demi";
import MyPluginComponent from "./components/MyPluginComponent";

interface MyPluginOptions {
  globalMessage?: string;
}

const MyUniversalVuePlugin: Plugin = {
  install(app: typeof Vue2, options?: MyPluginOptions) {
    // Vue 2 installation
    app.prototype.$myPlugin = {
      version: "0.1.0",
    };
    console.log("MyUniversalVuePlugin a été installé !", options);
    app.component("MyPluginComponent", MyPluginComponent);
  },
};
export default MyUniversalVuePlugin;
