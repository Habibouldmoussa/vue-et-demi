import { App, Plugin, Vue2, ref } from "vue-demi";

interface MyPluginOptions {
  globalMessage?: string;
}

const options: MyPluginOptions = {
  globalMessage: "Bienvenue dans mon plugin universel!",
};

const MyUniversalVuePlugin: Plugin = {
  install(app: any, options?: MyPluginOptions) {
    // Vue 2 installation
    Vue2.prototype.$myPlugin = {
      version: "0.1.0",
    };
    console.log("MyUniversalVuePlugin a été installé !", options);
    Vue2.component("MyPluginComponent", {
      setup() {
        const count = ref(0);
        return { count };
      },
      template: `<div>Plugin Component: {{ count }}</div>`,
    });
  },
};
export default MyUniversalVuePlugin;
