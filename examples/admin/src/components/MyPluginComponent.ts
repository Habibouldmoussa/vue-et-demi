import { ref, h } from "vue-demi";

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

export default MyPluginComponent;
