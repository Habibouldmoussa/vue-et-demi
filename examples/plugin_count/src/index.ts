import { App } from "vue-demi";
import CounterButton from "./components/CounterButton.vue";

export interface CounterPluginOptions {
  defaultStep?: number;
  maxCount?: number;
  minCount?: number;
}

export default {
  install(app: App, options: CounterPluginOptions = {}) {
    // Enregistrer le composant globalement
    app.component("CounterButton", CounterButton);

    // Ajouter les options par défaut
    app.config.globalProperties.$counterOptions = {
      defaultStep: 1,
      maxCount: 100,
      minCount: 0,
      ...options,
    };
  },
};
