import { App, Plugin, h, isVue2, isVue3 } from "vue-demi";
//import myComponentRender from "./components/myComponentRender";

// const model = {
//   prop: isVue3 ? "modelValue" : "value",
//   event: isVue3 ? "update:modelValue" : "input",
// };

// interface MyPluginOptions {
//   globalMessage?: string;
// }

const MyUniversalVuePlugin: Plugin = {
  install(app: any, options?: any) {
    // Vue 2 API
    // app.prototype.$myPlugin = {
    //   version: "0.1.0",
    //   message: options?.globalMessage || "Bienvenue dans mon plugin universel!",
    // };
    // //app.component("myComponentRender", myComponentRender);
    // console.log("MyUniversalVuePlugin a été installé !", options);
  },
};

export default MyUniversalVuePlugin;
