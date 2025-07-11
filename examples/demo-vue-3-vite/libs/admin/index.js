import { h, ref, isVue3 } from 'vue-demi';

const MyPluginComponent = {
    name: "MyPluginComponent",
    setup() {
        const count = ref(1);
        console.log("MyPluginComponent setup called");
        return { count };
    },
    render() {
        return h("div", `Plugin Component: ${this.count}`);
    },
};

const MyUniversalVuePlugin = {
    install(app, options) {
        if (isVue3) {
            // Vue 3 API
            app.config.globalProperties.$myPlugin = {
                version: "0.1.0",
                message: options?.globalMessage || "Bienvenue dans mon plugin universel!",
            };
            app.component("MyPluginComponent", MyPluginComponent);
        }
        else {
            // Vue 2 API
            app.prototype.$myPlugin = {
                version: "0.1.0",
                message: options?.globalMessage || "Bienvenue dans mon plugin universel!",
            };
            app.component("MyPluginComponent", MyPluginComponent);
        }
    },
};

export { MyUniversalVuePlugin as default };
