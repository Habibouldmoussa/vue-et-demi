import { Plugin, Vue2, App, isVue3 } from "vue-demi";
import AdminComponent from "./components/AdminComponent";
import Rando from "Rando/dist/cjs/Rando";

interface AdminOptions {
  globalMessage?: string;
}

const Admin: Plugin = {
  install(app: typeof Vue2 | App, options?: AdminOptions) {
    if (isVue3) {
      // Vue 3 API
      (
        app as App & { config: { globalProperties: any } }
      ).config.globalProperties.$Admin = {
        version: "0.1.0",
        message:
          options?.globalMessage || "Bienvenue dans mon plugin universel!",
      };
      (app as App).use(Rando);
      console.log("Admin plugin installed with options:", Rando);
      (app as App).component("AdminComponent", AdminComponent);
    } else {
      // Vue 2 API
      (app as typeof Vue2).prototype.$Admin = {
        version: "0.1.0",
        message:
          options?.globalMessage || "Bienvenue dans mon plugin universel!",
      };
      (app as typeof Vue2).use(Rando);
      console.log("Admin plugin installed with options:", Rando);
      (app as typeof Vue2).component("AdminComponent", AdminComponent);
    }
  },
};
export default Admin;
