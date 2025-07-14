import { Plugin, Vue2, App, isVue3 } from "vue-demi";
import RandoComponent from "./components/RandoComponent";

interface MyRandoOptions {
  globalMessage?: string;
}

const Rando: Plugin = {
  install(app: typeof Vue2 | App, options?: MyRandoOptions) {
    if (isVue3) {
      // Vue 3 API
      (
        app as App & { config: { globalProperties: any } }
      ).config.globalProperties.$myRandoPlugin = {
        version: "0.1.0",
        message: options?.globalMessage || "Bienvenue dans mon plugin Rando",
      };
      (app as App).component("RandoComponent", RandoComponent);
    } else {
      // Vue 2 API
      (app as typeof Vue2)!.prototype.$myRandoPlugin = {
        version: "0.1.0",
        message: options?.globalMessage || "Bienvenue dans mon plugin Rando!",
      };
      (app as typeof Vue2)!.component("RandoComponent", RandoComponent);
    }
  },
};
export default Rando;
