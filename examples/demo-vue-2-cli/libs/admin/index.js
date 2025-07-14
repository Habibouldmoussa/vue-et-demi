'use strict';

var vueDemi = require('vue-demi');
var Rando = require('Rando/dist/cjs/Rando');

const AdminComponent = {
    name: "AdminComponent",
    setup() {
        const count = vueDemi.ref(1);
        console.log("AdminComponent setup called");
        return { count };
    },
    render() {
        return vueDemi.h("div", `Plugin Component: ${this.count}`);
    },
};

const Admin = {
    install(app, options) {
        if (vueDemi.isVue3) {
            // Vue 3 API
            app.config.globalProperties.$Admin = {
                version: "0.1.0",
                message: (options === null || options === void 0 ? void 0 : options.globalMessage) || "Bienvenue dans mon plugin universel!",
            };
            app.use(Rando);
            console.log("Admin plugin installed with options:", Rando);
            app.component("AdminComponent", AdminComponent);
        }
        else {
            // Vue 2 API
            app.prototype.$Admin = {
                version: "0.1.0",
                message: (options === null || options === void 0 ? void 0 : options.globalMessage) || "Bienvenue dans mon plugin universel!",
            };
            app.use(Rando);
            console.log("Admin plugin installed with options:", Rando);
            app.component("AdminComponent", AdminComponent);
        }
    },
};

module.exports = Admin;
