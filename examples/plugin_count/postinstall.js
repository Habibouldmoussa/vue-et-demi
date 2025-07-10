const { switchVersion, loadModule } = require("vue-demi");

const Vue = loadModule("vue");
if (Vue && Vue.version) {
  if (Vue.version.startsWith("2.")) {
    switchVersion(2);
  } else if (Vue.version.startsWith("3.")) {
    switchVersion(3);
  }
}
