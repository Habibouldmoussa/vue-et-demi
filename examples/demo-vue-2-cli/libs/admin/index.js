'use strict';

var vueDemi = require('vue-demi');

const MyPluginComponent = {
    name: "MyPluginComponent",
    setup() {
        const count = vueDemi.ref(1);
        console.log("MyPluginComponent setup called");
        return { count };
    },
    render() {
        return vueDemi.h("div", `Plugin Component: ${this.count}`);
    },
};

const MyUniversalVuePlugin = {
    install(app, options) {
        if (vueDemi.isVue3) {
            // Vue 3 API
            app.config.globalProperties.$myPlugin = {
                version: "0.1.0",
                message: (options === null || options === void 0 ? void 0 : options.globalMessage) || "Bienvenue dans mon plugin universel!",
            };
            app.component("MyPluginComponent", MyPluginComponent);
        }
        else {
            // Vue 2 API
            app.prototype.$myPlugin = {
                version: "0.1.0",
                message: (options === null || options === void 0 ? void 0 : options.globalMessage) || "Bienvenue dans mon plugin universel!",
            };
            app.component("MyPluginComponent", MyPluginComponent);
        }
    },
};

module.exports = MyUniversalVuePlugin;
